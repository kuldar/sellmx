// Libraries
import React from 'react'
import { withRouter } from 'react-router-dom'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'

// Config
import config from '../../config'

// Components
import Header from '../../components/Header/Header'

// Login View
class LoginView extends React.Component {

  state = {
    email: '',
    password: ''
  }

  authenticateUser = async () => {
    const { authenticateUserMutation, history } = this.props
    const { email, password } = this.state

    // Authenticate user
    const response = await authenticateUserMutation({ variables: { email, password } })

    // Save user token to localStorage
    localStorage.setItem(config.graphCool.authToken, response.data.authenticateUser.token)

    // Back to home
    history.replace('/')
  }

  render () {
    const { loggedInUserQuery, history } = this.props
    const { email, password } = this.state

    // Check if loading
    if (loggedInUserQuery.loading) return <div>Loading</div>

    // Redirect if already logged in
    if (loggedInUserQuery.loggedInUser.id) {
      console.warn('already logged in')
      history.replace('/')
    }

    return (
      <div>
        <Header currentPage='login' />
        <input
          value={email}
          placeholder='Email'
          onChange={(e) => this.setState({ email: e.target.value })} />

        <input
          type='password'
          value={password}
          placeholder='Password'
          onChange={(e) => this.setState({ password: e.target.value })} />

          {
            email && password &&
            <button onClick={this.authenticateUser}>Log in</button>
          }
      </div>
    )
  }
}

// Authenticate user
const authenticateUserMutation = gql`
  mutation AuthenticateUserMutation (
    $email: String!,
    $password: String!
  ) {
    authenticateUser(
      email: $email,
      password: $password
    ) {
      token
    }
  }
`

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

export default compose(
  graphql(authenticateUserMutation, { name: 'authenticateUserMutation' }),
  graphql(loggedInUserQuery, {
    name: 'loggedInUserQuery',
    options: { fetchPolicy: 'network-only' }
  })
)(withRouter(LoginView))