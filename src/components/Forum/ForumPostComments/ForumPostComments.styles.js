// Libraries
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// Styles
import { Colors } from '../../../styles'

// Comments
export const Comments = styled.div`
  margin: 3rem 0 0 0;
`

// Meta
export const Meta = styled.div`
  display: flex;
  align-items: center;
`

// Delete
export const Delete = styled.div`
  font-size: 1.25rem;
  color: ${Colors.gray};
  display: none;
`

// Comment
export const Comment = styled.div`
  border-radius: 1rem;
  background-color: ${Colors.lightGray};
  margin: 0 0 1rem 0;
  padding: 0.5rem 2rem 2rem 2rem;

  &.isActive { box-shadow: inset 0 0 0 0.25rem ${Colors.red}; }
  &.isChained {
    margin: 0 0 0.25rem 0;
    padding: 0.5rem 2rem;
    ${Meta} { display: none; }
  }
`
// &:hover { ${Delete} { display: block; } }

// Body
export const Body = styled.div`
  font-size: 1.25rem;
  line-height: 1.75rem;
  margin: 0 0 1.5rem 0;
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
export const CreatedDate = styled(Link)`
  text-decoration: none;
  font-size: 1.25rem;
  color: ${Colors.gray};
`

// Spacer
export const Spacer = styled.div`
  flex: 1;
`