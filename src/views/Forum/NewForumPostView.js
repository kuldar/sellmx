// Libraries
import React from 'react'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'

// Config
import config from '../../config'

// Components
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { NewForumPostForm } from '../../components/Forum'

// New Forum Post View
class NewForumPostView extends React.Component {

  // Handle creating a new forum post
  handleCreateForumPost = async (post) => {

    // Check for user
    if (!localStorage.getItem(config.graphCool.authToken)) { this.props.history.push('/login') }

    // Create payload object
    const variables = { ...post, authorId: this.props.loggedInUserQuery.loggedInUser.id }

    // Create the post
    const newPost = await this.props.createForumPostMutation({ variables })
    if (newPost.topic) {
      this.props.history.push(`/forum/${newPost.topic.slug}/${newPost.slug}`)
    }
  }

  render() {
    const { allForumTopicsQuery, forumTopicQuery, loggedInUserQuery, match: { params: { topicSlug } } } = this.props

    // Check if loading
    if (allForumTopicsQuery.loading || loggedInUserQuery.loading || forumTopicQuery.loading) return <div>Loading</div>
    const forumTopics = allForumTopicsQuery.allForumTopics
    const topic = forumTopicQuery.ForumTopic

    return ([
      <div></div>,
      <Header currentPage='forum' />,
      <NewForumPostForm
        topic={topic}
        handleCreateForumPost={this.handleCreateForumPost}
        forumTopics={forumTopics} />,
      <Footer />
    ])
  }

}

// Current user
const loggedInUserQuery = gql`
  query LoggedInUserQuery {
    loggedInUser {
      id
      name
      email
      slug
    }
  }
`

// Forum Topic Query
const forumTopicQuery = gql`
  query ForumTopicQuery($slug: String!) {
    ForumTopic(slug: $slug) {
      id
      name
      slug
    }
  }
`

// All forum topics
const allForumTopicsQuery = gql`
  query AllForumTopicsQuery {
    allForumTopics {
      id
      name
      slug
    }
  }
`

// Create Forum Post Mutation
const createForumPostMutation = gql`
  mutation CreateForumPostMutation(
    $title: String!,
    $body: String!,
    $authorId: ID!,
    $topicId: ID!
  ) {
    createForumPost(
      title: $title,
      body: $body,
      authorId: $authorId,
      topicId: $topicId
    ) {
      id
      title
      body
      slug
      author {
        name
      }
      topic {
        slug
      }
    }
  }
`

export default compose(
  graphql(allForumTopicsQuery, { name: 'allForumTopicsQuery' }),
  graphql(createForumPostMutation, { name: 'createForumPostMutation' }),
  graphql(forumTopicQuery, {
    name: 'forumTopicQuery',
    options: ({ match }) => ({ variables: { slug: match.params.topicSlug }})
  }),
  graphql(loggedInUserQuery, { name: 'loggedInUserQuery', options: { fetchPolicy: 'network-only' } })
)(NewForumPostView)