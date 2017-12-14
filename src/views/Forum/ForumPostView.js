// Libraries
import React from 'react'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'
import styled from 'styled-components'

// Config
import config from '../../config'

// Components
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import {
  ForumPost,
  ForumPostComments,
  NewForumCommentForm
} from '../../components/Forum'

// PostView
export const PostView = styled.div`
  max-width: 57.5rem;
  margin: 0 auto 2rem auto;
  padding: 0 1.25rem;
`

// Forum Post View
class ForumPostView extends React.Component {

  // Handle creating a new forum post comment
  handleCreateForumPostComment = async (comment) => {

    // Check for user
    if (!localStorage.getItem(config.graphCool.authToken)) { this.props.history.push('/login') }

    // Create payload object
    const variables = {
      ...comment,
      authorId: this.props.loggedInUserQuery.loggedInUser.id,
      postId: this.props.forumPostQuery.ForumPost.id
    }

    // Create the comment
    await this.props.createForumCommentMutation({ variables })
    this.props.forumPostQuery.refetch()
  }

  render () {
    const { forumPostQuery, loggedInUserQuery, match } = this.props

    // Check if loading
    if (forumPostQuery.loading || loggedInUserQuery.loading) return <div>Loading</div>
    const forumPost = forumPostQuery.ForumPost
    const user = loggedInUserQuery.loggedInUser

    return ([
      <Header user={user} currentPage='forum' />,
      <PostView>
        { forumPost && <ForumPost post={forumPost} />}
        { forumPost &&
          <ForumPostComments
            user={user}
            activeComment={match.params.commentShortId}
            comments={forumPost.comments}
            topic={forumPost.topic}
            post={{ slug: forumPost.slug }} /> }
        <NewForumCommentForm handleCreateForumPostComment={this.handleCreateForumPostComment} />
      </PostView>,
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

// Forum Post Query
const forumPostQuery = gql`
  query ForumPostQuery($slug: String!) {
    ForumPost(slug: $slug) {
      id
      title
      body
      slug
      createdAt
      isPinned
      author {
        name
        email
      }
      topic {
        name
        slug
      }
      comments {
        id
        shortId
        body
        createdAt
        author {
          id
          name
          email
        }
      }
    }
  }
`

// Create Forum Comment Mutation
const createForumCommentMutation = gql`
  mutation CreateForumCommentMutation(
    $body: String!,
    $authorId: ID!,
    $postId: ID!
  ) {
    createForumComment(
      body: $body,
      authorId: $authorId,
      postId: $postId,
    ) {
      id
      body
      author {
        name
      }
    }
  }
`

export default compose(
  graphql(forumPostQuery, { name: 'forumPostQuery', options: ({ match }) => ({ variables: { slug: match.params.postSlug }}) }),
  graphql(createForumCommentMutation, { name: 'createForumCommentMutation' }),
  graphql(loggedInUserQuery, { name: 'loggedInUserQuery', options: { fetchPolicy: 'network-only' } })
) (ForumPostView)