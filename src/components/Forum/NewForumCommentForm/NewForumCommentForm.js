// Libraries
import React from 'react'

// Styles
import {
  Form,
  Textarea,
  Tutorial
} from './NewForumCommentForm.styles'
import { MainButton, DisabledButton } from '../../../styles'

// New Forum Comment Form
class NewForumCommentForm extends React.Component {

  state = { body: '' }

  handleCreateForumPostComment = (e) => {
    e.preventDefault
    this.props.handleCreateForumPostComment({ ...this.state })
    this.setState({ body: '' })
  }

  render() {
    const { body } = this.state

    return ([
      <Form>
        <Textarea
          rows={3}
          placeholder='Comment body'
          value={body}
          onChange={e => this.setState({ body: e.target.value })}>
        </Textarea>

        { body
          ? <MainButton to='#!' onClick={e => this.handleCreateForumPostComment(e)}>
              Post comment
            </MainButton>
          : <DisabledButton to='#' onClick={e => e.preventDefault}>Enter a comment…</DisabledButton>
        }
      </Form>,
      <Tutorial>
        You can use Github Flavored Markdown to write the comments. <strong>Separate paragraphs</strong> with blank lines. <strong>Italicize text</strong> by surrounding it with asterisks *. <strong>Make lists</strong> by starting lines with hyphens or numbers. <strong>Quote text</strong> by opening the paragraph with a greater-than sign > followed by a space. <strong>Write code</strong> by indenting 4 spaces or surrounding it with backticks `. URLs automatically turn into links.
      </Tutorial>
    ])
  }

}

export default NewForumCommentForm