// Libraries
import React from 'react'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'

// Components
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import {
  HomeHero,
  HomeProducts,
  HomeCommunity,
  HomeServices
} from '../../components/Home'

// Styles
import { Wrapper } from '../../styles'

// Home View
class HomeView extends React.Component {

  render () {
    const { loggedInUserQuery, latestForumPostsQuery } = this.props

    // Check if loading
    if (loggedInUserQuery.loading || latestForumPostsQuery.loading) return <div>Loading</div>
    const user = loggedInUserQuery.loggedInUser
    const posts = latestForumPostsQuery.allForumPosts

    return ([
      <Header user={user} />,
      <HomeHero />,
      <HomeProducts />,
      <Wrapper>
        <HomeCommunity posts={posts} />
        <HomeServices />
      </Wrapper>,
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

// Latest forum posts
const latestForumPostsQuery = gql`
  query LatestForumPostsQuery {
    allForumPosts(
      filter: { isPinned: false }
      orderBy: createdAt_DESC
      first: 5
    ) {
      title
      slug
      topic {
        name
        slug
      }
      _commentsMeta {
        count
      }
    }
  }
`

export default compose(
  graphql(loggedInUserQuery, { name: 'loggedInUserQuery', options: { fetchPolicy: 'network-only' } }),
  graphql(latestForumPostsQuery, { name: 'latestForumPostsQuery' })
) (HomeView)