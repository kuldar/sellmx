// Libraries
import React from 'react'

// Styles
import {
  Row,
  Logo,
  Nav,
  NavLink
} from './Footer.styles'

// Styles
import { Wrapper } from '../../styles'

// Footer
export default class Footer extends React.Component {
  render () {
    const { style } = this.props
    const styleClass = (style) => { return (style == 'light') ? 'isLight' : 'isDark' }

    return (
      <Wrapper>
        <Row className={styleClass(style)}>
          <Logo to='/'><img src="/images/logo-gray.svg" alt="Sellmx"/></Logo>
          <Nav>
            <NavLink target='_blank' to='https://twitter.com/sellmx'>Twitter</NavLink>
            <NavLink target='_blank' to='/https://facebook.com/sellmx'>Facebook</NavLink>
            <NavLink to='/terms'>Terms</NavLink>
            <NavLink to='mailto:hi@sellmx.com'>hi@sellmx.com</NavLink>
          </Nav>
        </Row>
      </Wrapper>
    )
  }
}