// Libraries
import React from 'react'
import { graphql, compose } from 'react-apollo'
import styled from 'styled-components'
import gql from 'graphql-tag'
import md5 from 'md5'

// Config
import config from '../../config'

// Components
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

// Styles
import { Colors, Fonts, SecondaryButton } from '../../styles'

// Icons
import { DividerIcon } from '../../icons'

// Member
export const Member = styled.div`
  padding: 5rem 0;
  text-align: center;

  ${SecondaryButton} { margin: 2rem 0 0 0; }
`

// Avatar
export const Avatar = styled.img`
  margin: 0 0 2rem 0;
  border-radius: 4rem;
  width: 4rem;
  height: 4rem;
`

// Name
export const Name = styled.h1`
  font-family: ${Fonts.secondaryFont};
  color: ${Colors.dark};
  font-size: 3rem;
  font-weight: bold;
  line-height: 1;
  letter-spacing: -1px;
  margin: 0;
`

// Meta
export const Meta = styled.div`
  margin: 1rem 0 0 0;
  font-size: 1.5rem;
  line-height: 1;
  color: ${Colors.gray};
  svg { margin: 0 1rem; }
`

// Member View
class MemberView extends React.Component {

  // Handle logging out
  handleLogout = (e) => {
    e.preventDefault()
    localStorage.removeItem(config.graphCool.authToken)
    this.props.history.push('/')
  }

  render () {
    const { loggedInUserQuery, userQuery } = this.props

    // Check if loading
    if (loggedInUserQuery.loading || userQuery.loading) return <div>Loading</div>
    const user = loggedInUserQuery.loggedInUser
    const member = userQuery.User

    return ([
      <Header user={user} currentPage={ (member.id === user.id) ? 'profile' : ''} />,
      <Member>
        <Avatar src={`https://www.gravatar.com/avatar/${md5(member.email)}`} alt={member.name} />
        <Name>{member.name}</Name>
        <Meta>
          {member._forumPostsMeta.count} {member._forumPostsMeta.count === 1 ? 'post' : 'posts'}
          <DividerIcon />
          {member._forumCommentsMeta.count} {member._forumCommentsMeta.count === 1 ? 'comment' : 'comments'}
        </Meta>
        { (member.id === user.id) && <SecondaryButton onClick={(e) => this.handleLogout(e)} to='#'>Log out</SecondaryButton> }
      </Member>,
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

// User query
const userQuery = gql`
  query UserQuery($slug: String!) {
    User(slug: $slug) {
      id
      name
      email
      slug
      _forumCommentsMeta {
        count
      }
      _forumPostsMeta {
        count
      }
    }
  }
`

export default compose(
  graphql(loggedInUserQuery, { name: 'loggedInUserQuery', options: { fetchPolicy: 'network-only' } }),
  graphql(userQuery, {
    name: 'userQuery',
    options: ({ match }) => ({ variables: { slug: match.params.slug }})
  })
)(MemberView)