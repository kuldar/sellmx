// Libraries
import React from 'react'

// Styles
import { MainButton } from '../../../styles'
import {
  Community,
  CommunityTitle,
  CommunityIntro,
  PinnedPost,
  PinnedPostIcon,
  Posts,
  PostContainer,
  PostComments,
  PostRow,
  PostTitle,
  CommentsCount,
  PostTopic
} from './HomeCommunity.styles'

// Icons
import { CommentsIcon, PinIcon } from '../../../icons'

// Featured Post
const featuredPostTitle = 'Say hello to the community!'
const featuredPostSlug = 'say-hello-to-the-community'
const featuredPostTopicSlug = 'community'

// Post
const Post = ({ post }) => (
  <PostContainer to={`/forum/${post.topic.slug}/${post.slug}`}>
    <PostComments>
      <CommentsCount>{post._commentsMeta.count}</CommentsCount>
      <CommentsIcon />
    </PostComments>
    <PostRow>
      <PostTitle>{post.title}</PostTitle>
      <PostTopic>in {post.topic.name}</PostTopic>
    </PostRow>
  </PostContainer>
)

// Home Community
export default class HomeCommunity extends React.Component {
  render () {

    const { posts } = this.props

    return (
      <Community>
        <CommunityTitle>Community</CommunityTitle>
        <CommunityIntro>Need general help with Hubspot? Post your question and get help from the amazing community!</CommunityIntro>

        <PinnedPost to={`/forum/${featuredPostTopicSlug}/${featuredPostSlug}`}>
          <PinnedPostIcon><PinIcon /></PinnedPostIcon>
          <PostTitle>{featuredPostTitle}</PostTitle>
        </PinnedPost>

        <Posts>
          { posts && posts.map(post => <Post post={post} />) }
          <MainButton to='/forum'>View all topics</MainButton>
        </Posts>
      </Community>
    )
  }
}