// Libraries
import styled from 'styled-components'

// Styles
import { Colors, Gradients, Fonts } from '../../../styles'

// Products
export const Products = styled.div`
  background-color: ${Colors.dark};
  padding: 5rem 0;
`

// Header
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

// Title Container
export const Title = styled.div`
  max-width: 30rem;
`

// Small Title
export const SmallTitle = styled.span`
  display: block;
  font-size: 1rem;
  line-height: 1;
  font-weight: bold;
  text-transform: uppercase;
  color: ${Colors.gray2};
  margin: 0 0 1rem 0;
`

// Main Title
export const MainTitle = styled.h1`
  margin: 0;
  color: ${Colors.white};
  font-family: ${Fonts.secondaryFont};
  font-size: 3rem;
  font-weight: bold;
  line-height: 1;
`