// Libraries
import React from 'react'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'

// Components
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { ForumHeader, ForumTopics } from '../../components/Forum'

// Forum View
class ForumView extends React.Component {

  render () {
    const { allForumTopicsQuery, loggedInUserQuery } = this.props

    // Check if loading
    if (allForumTopicsQuery.loading || loggedInUserQuery.loading) return <div>Loading</div>
    const forumTopics = allForumTopicsQuery.allForumTopics
    const user = loggedInUserQuery.loggedInUser

    return ([
      <Header user={user} currentPage='forum' />,
      <ForumHeader />,
      <ForumTopics topics={forumTopics} />,
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

// All forum topics
const allForumTopicsQuery = gql`
  query AllForumTopicsQuery {
    allForumTopics {
      id
      name
      slug
      intro
      posts: posts(
        filter: { isPinned: false }
        orderBy: createdAt_DESC
        first: 5
      ) {
        title
        slug
        author {
          name
        }
        _commentsMeta {
          count
        }
      }
      pinnedPosts: posts(
        filter: { isPinned: true }
        orderBy: createdAt_DESC
      ) {
        title
        slug
      }
    }
  }
`

export default compose(
  graphql(loggedInUserQuery, { name: 'loggedInUserQuery', options: { fetchPolicy: 'network-only' } }),
  graphql(allForumTopicsQuery, { name: 'allForumTopicsQuery' })
)(ForumView)