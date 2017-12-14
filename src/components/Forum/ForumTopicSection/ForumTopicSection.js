// Libraries
import React from 'react'
// import { Link } from 'react-router-dom'

// Styles
import { MainButton } from '../../../styles'
import {
  Topics,
  Topic,
  TopicTitle,
  TopicIntro,
  PinnedPosts,
  PinnedPostContainer,
  PinnedPostIcon,
  Posts,
  PostContainer,
  PostComments,
  PostRow,
  PostTitle,
  PostTopic,
  PostAuthor,
  CommentsCount
} from './ForumTopicSection.styles'

// Icons
import { CommentsIcon, PinIcon } from '../../../icons'

// Post
const PinnedPost = ({ post, topic }) => (
  <PinnedPostContainer to={`/forum/${topic.slug}/${post.slug}`}>
    <PinnedPostIcon><PinIcon /></PinnedPostIcon>
    <PostTitle>{post.title}</PostTitle>
  </PinnedPostContainer>
)

// Post
const Post = ({ post, topic }) => (
  <PostContainer to={`/forum/${topic.slug}/${post.slug}`}>
    <PostComments>
      <CommentsCount>{post._commentsMeta.count}</CommentsCount>
      <CommentsIcon />
    </PostComments>
    <PostRow>
      <PostTitle>{post.title}</PostTitle>
      <PostTopic>by {post.author.name}</PostTopic>
    </PostRow>
  </PostContainer>
)

// Forum Topic Section
export default class ForumTopicSection extends React.Component {
  render () {

    const { topic } = this.props

    return (
      <Topic>
        <TopicTitle to={`/forum/${topic.slug}`}>{topic.name}</TopicTitle>
        <TopicIntro>{topic.intro}</TopicIntro>
        <PinnedPosts>
          { topic.pinnedPosts && topic.pinnedPosts.map(pinnedPost => <PinnedPost topic={{ slug: topic.slug }} post={pinnedPost} />) }
        </PinnedPosts>
        <Posts>
          { topic.posts && topic.posts.map(post => <Post topic={{ slug: topic.slug }} post={post} />) }
          <MainButton to={`/forum/${topic.slug}`}>View all posts</MainButton>
        </Posts>
      </Topic>
    )
  }
}