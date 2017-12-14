// Libraries
import React from 'react'
import { Link } from 'react-router-dom'
import marked from 'marked'
import moment from 'moment'
import md5 from 'md5'

// Styles
import {
  Comments,
  Comment,
  Body,
  Meta,
  Avatar,
  Author,
  CreatedDate,
  Spacer,
  Delete
} from './ForumPostComments.styles'

// Forum Post Comments
export default class ForumPostComments extends React.Component {
  render () {
    const { topic, post, comments, activeComment, user } = this.props

    return (
      <Comments>
        { comments && comments.map((comment, index, array) => {

          let commentClass = ''
          const commentDate = moment(comment.createdAt)

          if (index+1 < array.length) {
            if (comment.author.id === array[index+1].author.id) {
              const nextCommentDate = moment(array[index+1].createdAt)
              if (nextCommentDate.diff(moment(commentDate), 'minutes') < 60) {
                commentClass = 'isChained'
              }
            }
          }

          return (
            <Comment className={`${commentClass} ${comment.shortId === activeComment ? 'isActive' : ''}`}>
              <Body dangerouslySetInnerHTML={{__html: marked(comment.body)}} />
              <Meta>
                <Avatar src={`https://www.gravatar.com/avatar/${md5(comment.author.email)}`} alt={comment.author.name}/>
                <Author>{comment.author.name}</Author>
                <CreatedDate to={`/forum/${topic.slug}/${post.slug}/${comment.shortId}`}>{moment(comment.createdAt).fromNow()}</CreatedDate>
                <Spacer />
                { user.id === comment.author.id && <Delete>Delete</Delete> }
              </Meta>
            </Comment>
          )
        }) }
      </Comments>
    )
  }
}
