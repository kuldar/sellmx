// Libraries
import React from 'react'
import marked from 'marked'
import moment from 'moment'
import md5 from 'md5'

// Styles
import {
  BackLink,
  Post,
  Title,
  Body,
  Meta,
  Avatar,
  Author,
  CreatedDate
} from './ForumPost.styles'

import { PinIcon } from '../../../icons'

// Configure markdown
marked.setOptions({ gfm: true, breaks: true })

// Forum Post
export default class ForumPost extends React.Component {

  render () {
    const { title, body, slug, author, topic, comments, createdAt, isPinned } = this.props.post

    return ([
      <Post>
        <BackLink to={`/forum/${topic.slug}`}>{topic.name}</BackLink>
        <Title>
          {isPinned && <PinIcon />}
          {title}
        </Title>
        {
          !isPinned &&
          <Meta>
            <Avatar src={`https://www.gravatar.com/avatar/${md5(author.email)}`} />
            <Author>{author.name}</Author>
            <CreatedDate>{moment(createdAt).fromNow()}</CreatedDate>
          </Meta>
        }
        <Body dangerouslySetInnerHTML={{__html: marked(body)}} />
      </Post>
    ])
  }
}
