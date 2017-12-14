// Libraries
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// Styles
import { Colors, Gradients } from '../../styles'

// Beta Notice
export const BetaNotice = styled.div`
  padding: 0.75rem 1rem;
  background-image: ${Gradients.redToOrange};
  color: ${Colors.white};
  text-align: center;
`

// Logo
export const Logo = styled(Link)`
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
`

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

  &.isActive,
  &:hover {
    color: ${Colors.dark};
    svg { color: ${Colors.red}; }
  }

  svg {
    transition: 0.1s;
    display: block;
    margin-right: 0.5rem;
    color: ${Colors.gray2};
  }

  &:active { position: relative; top: 1px; }
`

// Navigation
export const NavDivider = styled.div`
  color: ${Colors.gray2};
`

// Row
export const Row = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;

  &.isLight {
    ${NavLink} {
      color: ${Colors.gray2};
      svg { color: ${Colors.gray}; }
      &.isActive,
      &:hover {
        svg { color: ${Colors.red}; }
        color: ${Colors.white};
      }
    }
  }
`