// Libraries
import React from 'react'

// Styles
import { MainButton } from '../../../styles'
import { Form } from './NewForumPostForm.styles'

// New Forum Post Form
class NewForumPostForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: '',
      topicId: props.topic ? props.topic.id : ''
    }
  }

  render() {
    const { handleCreateForumPost, forumTopics, topic } = this.props
    const { title, body, topicId } = this.state

    return (
      <Form>
        <div>
          <div><strong>Topic:</strong></div>
          <select onChange={e => this.setState({ topicId: e.target.value })}>
            { !topic && <option value=''>Select a topic</option> }
            { forumTopics.map(forumTopic => <option selected={ topic && (topic.id == forumTopic.id) ? true : false } value={forumTopic.id}>{forumTopic.name}</option>) }
          </select>
        </div>

        <div>
          <div><strong>Title:</strong></div>
          <input
            placeholder='Post title'
            value={title}
            onChange={e => this.setState({ title: e.target.value })}
            type='text' />
        </div>

        <div>
          <div><strong>Body:</strong></div>
          <textarea
            placeholder='Post body'
            value={body}
            onChange={e => this.setState({ body: e.target.value })}>
          </textarea>
        </div>

        {
          title && body && topicId &&
          <MainButton to='#' onClick={() => handleCreateForumPost({ ...this.state })}>
            Create new post
          </MainButton>
        }

      </Form>
    )
  }

}

export default NewForumPostForm