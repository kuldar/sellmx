// Libraries
import React from 'react'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'

// Components
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { ForumTopic } from '../../components/Forum'

// Forum Topic View
class ForumTopicView extends React.Component {

  render () {
    const { forumTopicQuery, loggedInUserQuery } = this.props

    // Check if loading
    if (forumTopicQuery.loading || loggedInUserQuery.loading) return <div>Loading</div>
    const forumTopic = forumTopicQuery.ForumTopic
    const user = loggedInUserQuery.loggedInUser

    return ([
      <Header currentPage='forum' user={user} />,
      <ForumTopic topic={forumTopic} />,
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
      intro
      product { slug }
      pinnedPosts: posts(
        filter: { isPinned: true }
        orderBy: createdAt_DESC
      ) {
        title
        slug
        createdAt
        lastComment: comments(
          orderBy: createdAt_DESC
          first: 1
        ) {
          id
          createdAt
        }
      }
      posts: posts(
        filter: { isPinned: false }
        orderBy: createdAt_DESC
      ) {
        title
        slug
        createdAt
        lastComment: comments(
          orderBy: createdAt_DESC
          first: 1
        ) {
          id
          createdAt
        }
        author {
          name
          email
        }
        _commentsMeta {
          count
        }
      }
    }
  }
`

export default compose(
  graphql(loggedInUserQuery, { name: 'loggedInUserQuery', options: { fetchPolicy: 'network-only' } }),
  graphql(forumTopicQuery, {
    name: 'forumTopicQuery',
    options: ({ match }) => ({ variables: { slug: match.params.slug }})
  })
)(ForumTopicView)