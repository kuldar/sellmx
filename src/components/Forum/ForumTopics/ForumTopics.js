// Libraries
import React from 'react'

// Components
import { ForumTopicSection } from '../../../components/Forum'

// Styles
import { Topics } from './ForumTopics.styles'

// Forum Topics
class ForumTopics extends React.Component {
  render () {
    const { topics } = this.props

    return (
      <Topics>
        { topics && topics.map(topic => <ForumTopicSection topic={topic} />) }
      </Topics>
    )
  }
}

export default ForumTopics