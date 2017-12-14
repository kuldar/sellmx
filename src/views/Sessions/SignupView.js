// Libraries
import React from 'react'
import { withRouter } from 'react-router-dom'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'

// Config
import config from '../../config'

// Components
import Header from '../../components/Header/Header'

// Signup View
class SignupView extends React.Component {

  constructor(props) {
    super()

    this.state = {
      email: '',
      password: '',
      name: '',
      emailSubscription: false
    }
  }

  render () {
    const { loggedInUserQuery, history } = this.props
    const { email, password, name, emailSubscription } = this.state

    // Check if loading
    if (loggedInUserQuery.loading) return <div>Loading</div>

    // Redirect if already logged in
    if (loggedInUserQuery.loggedInUser.id) {
      console.warn('Already logged in')
      history.replace('/')
    }

    return (
      <div>
        <Header currentPage='signup' />
        <input
          value={email}
          placeholder='Email'
          onChange={(e) => this.setState({ email: e.target.value })} />

        <input
          type='password'
          value={password}
          placeholder='Password'
          onChange={(e) => this.setState({ password: e.target.value })} />

        <input
          value={name}
          placeholder='Name'
          onChange={(e) => this.setState({ name: e.target.value })} />

        {
          name && email && password &&
          <button onClick={this.signupUser}>Sign up</button>
        }
      </div>
    )
  }

  // Sign user up
  signupUser = async () => {
    const { email, password, name } = this.state
    const { signupUserMutation, history } = this.props

    try {
      // Create user
      const user = await signupUserMutation({ variables: { email, password, name } })

      // Set token and redirect
      localStorage.setItem(config.graphCool.authToken, user.data.signupUser.token)
      history.replace('/')

    } catch (e) {

      // When error occurs
      console.error(`An error occured: `, e)
      history.replace('/')
    }

  }
}

// Signup User Mutation
const signupUserMutation = gql`
  mutation SignupUserMutation (
    $email: String!,
    $password: String!,
    $name: String
  ) {
    signupUser(
      email: $email,
      password: $password,
      name: $name
    ) {
      id
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
  graphql(signupUserMutation, { name: 'signupUserMutation' }),
  graphql(loggedInUserQuery, {
    name: 'loggedInUserQuery',
    options: { fetchPolicy: 'network-only' }
  })
)(withRouter(SignupView))