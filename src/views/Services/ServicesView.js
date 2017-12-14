// Libraries
import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

// Components
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

// Services View
class ServicesView extends React.Component {

  render () {
    const { loggedInUserQuery } = this.props

    // Check if loading
    if (loggedInUserQuery.loading) return <div>Loading</div>
    const user = loggedInUserQuery.loggedInUser

    return ([
      <Header user={user} currentPage='services' />,
      <div>Services</div>,
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

export default graphql(loggedInUserQuery, { name: 'loggedInUserQuery', options: { fetchPolicy: 'network-only' } })(ServicesView)