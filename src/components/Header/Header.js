// Libraries
import React from 'react'

// Styles
import {
  Row,
  Logo,
  Nav,
  NavLink,
  NavDivider,
  BetaNotice
} from './Header.styles'

// Styles
import { Wrapper } from '../../styles'

// Icons
import {
  ProductsIcon,
  CommunityIcon,
  ServicesIcon,
  DividerIcon,
  UserIcon
} from '../../icons'

// Header
export default class Header extends React.Component {
  render () {
    const { user, currentPage, style } = this.props
    const activeClassFor = (page) => { return page == currentPage ? 'isActive' : '' }
    const styleClass = (style) => {
      if (style == 'light') return 'isLight'
      else return 'isDark'
    }

    return ([
      <BetaNotice>Just FYI, this site is in active development 👋 <strong>We're launching on January 1st, 2018</strong></BetaNotice>,
      <Wrapper>
        <Row className={styleClass(style)}>
          <Logo to='/'>
            { (style && style == 'light')
              ? <img src="/images/logo-light.svg" alt="Sellmx"/>
              : <img src="/images/logo-dark.svg" alt="Sellmx"/> }
          </Logo>
          <Nav>
            <NavLink
              to='/products'
              className={activeClassFor('products')}>
              <ProductsIcon />
              Products
            </NavLink>

            <NavLink
              to='/forum'
              className={activeClassFor('forum')}>
              <CommunityIcon />
              Community
            </NavLink>

            <NavLink
              to='/services'
              className={activeClassFor('services')}>
              <ServicesIcon />
              Services
            </NavLink>

            {
              user && user.name
              ? <NavLink
                to={`/members/${user.slug}`}
                className={activeClassFor('profile')}>
                  <UserIcon />
                  {user.name}
                </NavLink>
              : [
                  <NavLink
                    to='/login'
                    className={activeClassFor('login')}>
                    Log in
                  </NavLink>,
                  <NavDivider><DividerIcon /></NavDivider>,
                  <NavLink
                    to='/signup'
                    className={activeClassFor('signup')}>
                    Sign up
                  </NavLink>
                ]
            }
          </Nav>
        </Row>
      </Wrapper>
    ])
  }
}