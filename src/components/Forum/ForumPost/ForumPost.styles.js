// Libraries
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// Styles
import { Colors, Fonts } from '../../../styles'

// BackLink
export const BackLink = styled(Link)`
  transition: 0.1s;
  display: inline-block;
  font-size: 1.5rem;
  line-height: 1;
  text-transform: uppercase;
  font-weight: bold;
  font-family: ${Fonts.secondaryFont};
  color: ${Colors.gray};
  margin: 0 0 1rem 0;
  text-decoration: none;

  &:hover { color: ${Colors.dark}; }
`

// Post
export const Post = styled.div`
  padding: 2rem 2.5rem;
  font-size: 1.5rem;
  line-height: 2rem;
`

// Title
export const Title = styled.h1`
  position: relative;
  color: ${Colors.dark};
  font-size: 4rem;
  line-height: 1;
  font-family: ${Fonts.secondaryFont};
  letter-spacing: -1.5px;
  margin: 0;

  svg {
    position: absolute;
    left: -2rem;
    top: 0.5rem;
  }
`

// Body
export const Body = styled.div`
  padding: 1.5rem 0 0 0;
`

// Meta
export const Meta = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 1rem 0 0 0;
`

// Avatar
export const Avatar = styled.img`
  display: block;
  width: 2rem;
  height: 2rem;
  border-radius: 2rem;
  margin: 0 1rem 0 0;
`

// Author
export const Author = styled.div`
  color: ${Colors.dark};
  font-weight: bold;
  font-size: 1.25rem;
  margin: 0 1rem 0 0;
`

// Created Date
export const CreatedDate = styled.div`
  font-size: 1.25rem;
  color: ${Colors.gray};
`