// Libraries
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import TextareaAutosize from 'react-autosize-textarea'

// Styles
import { Fonts, Colors, MainButton, DisabledButton } from '../../../styles'

// Form
export const Form = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Colors.lightGray};
  border-radius: 1rem;
  padding: 2rem 2.5rem;

  ${MainButton},
  ${DisabledButton} {
    margin: 1rem 0 0 0;
    align-self: flex-start;
  }
`

// Textarea
export const Textarea = styled(TextareaAutosize)`
  font-family: ${Fonts.mainFont};
  outline: none;
  border: none;
  background-color: transparent;
  padding: 0;
  margin: 0;
  color: ${Colors.dark};
  font-size: 1.25rem;
  line-height: 1.75rem;
  resize: none;

  &::placeholder {
    color: ${Colors.gray};
    font-family: ${Fonts.mainFont};
  }
`

// Tutorial
export const Tutorial = styled.div`
  color: ${Colors.gray};
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-style: italic;
  padding: 2rem 2.5rem;
`