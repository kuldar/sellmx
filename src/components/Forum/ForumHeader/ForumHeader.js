// Libraries
import React from 'react'

// Styles
import {
  Header,
  Title,
  Intro
} from './ForumHeader.styles'

// Forum Header
export default class ForumHeader extends React.Component {
  render () {
    return (
      <Header>
        <Title>Welcome to the community!</Title>
        <Intro>
          <strong>Landing pages, newsletters, sales funnels</strong> and more resources for ecommerce and SAAS products.
        </Intro>
      </Header>
    )
  }
}