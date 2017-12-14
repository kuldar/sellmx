// Libraries
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// Styles
import { Colors } from '../../styles'

// Row
export const Row = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;

  &.isLight { color: ${Colors.white}; }
`

// Logo
export const Logo = styled(Link)``

// Navigation
export const Nav = styled.nav`
  display: flex;
  align-items: center;
`

// Navigation Link
export const NavLink = styled(Link)`
  transition: 0.1s;
  display: flex;
  align-items: center;
  margin: 0 1rem;
  font-size: 1rem;
  line-height: 1;
  outline: none;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  color: ${Colors.gray};

  &:hover { color: ${Colors.dark}; }
  &:active { position: relative; top: 1px; }
`