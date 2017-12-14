// Libraries
import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

// Styles
import { MainButton, SecondaryButton, Wrapper } from '../../../styles'
import {
  Topic,
  TopicHeader,
  TopicHeading,
  TopicButtons,
  TopicName,
  TopicIntro,
  PinnedPosts,
  PinnedPostContainer,
  PinnedPostIcon,
  Posts,
  PostContainer,
  PostComments,
  PostRow,
  PostTitle,
  PostMeta,
  PostAuthor,
  PostDate,
  CommentsCount,
  BackLink
} from './ForumTopic.styles'

// Icons
import { CommentsIcon, PinIcon } from '../../../icons'

// Post
const PinnedPost = ({ post, topic }) => (
  <PinnedPostContainer to={`/forum/${topic.slug}/${post.slug}`}>
    <PinnedPostIcon><PinIcon /></PinnedPostIcon>
    <PostTitle>{post.title}</PostTitle>
    <PostDate>{ post.lastComment.length > 0 ? moment(post.lastComment[0].createdAt).fromNow() : moment(post.createdAt).fromNow() }</PostDate>
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
      <PostMeta>
        <PostAuthor>by {post.author.name}</PostAuthor>
        <PostDate>{ post.lastComment.length > 0 ? moment(post.lastComment[0].createdAt).fromNow() : moment(post.createdAt).fromNow() }</PostDate>
      </PostMeta>
    </PostRow>
  </PostContainer>
)

// Forum Topic
export default class ForumTopic extends React.Component {

  render () {

    const {
      name,
      intro,
      slug,
      pinnedPosts,
      posts,
      product
    } = this.props.topic

    return (
      <Wrapper>
        <Topic>
          <TopicHeader>
            <TopicHeading>
              <BackLink to={`/forum/`}>All topics</BackLink>
              <TopicName>{name}</TopicName>
              <TopicIntro>{intro}</TopicIntro>
            </TopicHeading>
            <TopicButtons>
              { product &&
                <SecondaryButton to={`/products/${product.slug}`}>View the product</SecondaryButton> }
              <MainButton to={`/forum/new/${slug}`}>Create a new post</MainButton>
            </TopicButtons>
          </TopicHeader>

          <PinnedPosts>
            { pinnedPosts && pinnedPosts.map(pinnedPost => <PinnedPost post={pinnedPost} topic={{slug: this.props.topic.slug}} />) }
          </PinnedPosts>

          <Posts>
            { posts && posts.map(post => <Post post={post} topic={{slug: this.props.topic.slug}} />) }
          </Posts>
        </Topic>
      </Wrapper>
    )
  }
}
