// Libraries
import styled from 'styled-components'

// Styles
import { Colors } from '../../../styles'

// Styled Components
export const Header = styled.div`
  text-align: center;
  padding: 5rem 0 2.5rem 0;
  max-width: 40rem;
  margin: 0 auto;
`

export const Title = styled.h1`
  color: ${Colors.dark};
  font-weight: bold;
  font-size: 4rem;
  line-height: 0.875;
  letter-spacing: -1.5px;
  margin: 0;
`

export const Intro = styled.p`
  color: ${Colors.gray};
  margin: 2rem 0 0 0;
  font-size: 1.5rem;
  line-height: 2rem;
`