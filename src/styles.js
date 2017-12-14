// Libraries
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// Colors
export const Colors = {
  white: '#ffffff',
  whiteOpacity10: 'rgba(255, 255, 255, 0.1)',
  dark: '#262243',
  gray: '#8985A1',
  grayOpacity25: 'rgba(134, 137, 155, 0.25)',
  gray2: '#BDBACF',
  lightGray: '#F6F6F9',
  red: '#E71756',
  yellow: 'yellow'
}

// Gradients
export const Gradients = {
  redToOrange: 'linear-gradient(135deg, #E74D17, #E71756)'
}

// Wrapper
export const Wrapper = styled.div`
  max-width: 72.5rem;
  margin: 0 auto;
  padding: 0 1.25rem;
`

// Fonts
export const Fonts = {
  mainFont: "'Roboto', sans-serif",
  secondaryFont: "'Roboto Condensed', sans-serif"
}

// Box Shadows
export const BoxShadow = '0px 2px 4px rgba(38, 34, 67, 0.15)'

// Main Button
export const MainButton = styled(Link)`
  transition: 0.1s;
  display: inline-block;
  text-transform: uppercase;
  font-weight: bold;
  line-height: 1;
  background-image: ${Gradients.redToOrange};
  color: ${Colors.white};
  text-decoration: none;
  padding: 0.75rem 1.25rem;
  border-radius: 3rem;
  text-align: center;

  &:hover { padding: 0.75rem 1.5rem; }
  &:active {
    position: relative;
    top: 1px;
  }

  @media only screen and (min-width: 50rem) {
    padding: 1rem 1.5rem;
    &:hover { padding: 1rem 1.875rem; }
  }
`

// Secondary Button
export const SecondaryButton = styled(Link)`
  transition: 0.1s;
  display: inline-block;
  text-transform: uppercase;
  font-weight: bold;
  line-height: 1;
  background-color: ${Colors.lightGray};
  color: ${Colors.dark};
  text-decoration: none;
  padding: 0.75rem 1.25rem;
  border-radius: 3rem;
  text-align: center;

  &:hover { padding: 0.75rem 1.5rem; }
  &:active {
    position: relative;
    top: 1px;
  }

  @media only screen and (min-width: 50rem) {
    padding: 1rem 1.5rem;
    &:hover { padding: 1rem 1.875rem; }
  }
`

// Disabled Button
export const DisabledButton = styled(Link)`
  pointer-events: none;
  display: inline-block;
  text-transform: uppercase;
  font-weight: bold;
  line-height: 1;
  background-color: ${Colors.gray2};
  color: ${Colors.white};
  text-decoration: none;
  padding: 0.75rem 1.25rem;
  border-radius: 3rem;
  text-align: center;

  @media only screen and (min-width: 50rem) {
    padding: 1rem 1.5rem;
  }
`