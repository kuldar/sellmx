// Libraries
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// Styles
import { Colors, Fonts } from '../../../styles'

// Topic
export const Topic = styled.div`
  padding: 2rem 1.25rem;
  width: 100%;

  @media only screen and (min-width: 50rem) {
    padding: 2.5rem 1.25rem;
    width: 50%;
  }

  @media only screen and (min-width: 60rem) {
    padding: 2.5rem 2rem;
  }
`

// Topic Title
export const TopicTitle = styled(Link)`
  display: inline-block;
  text-decoration: none;
  font-size: 2rem;
  line-height: 1;
  font-weight: bold;
  letter-spacing: -1px;
  font-family: ${Fonts.secondaryFont};
  margin: 0 0 1rem 0;

  @media only screen and (min-width: 50rem) {
    margin: 0 0 1.5rem 0;
    font-size: 3rem;
  }
`

// Topic Intro
export const TopicIntro = styled.div`
  margin: 0 0 1.5rem 0;
  font-size: 1.25rem;
  line-height: 1.5rem;
  color: ${Colors.gray};

  @media only screen and (min-width: 50rem) {
    margin: 0 0 2rem 0;
    font-size: 1.5rem;
    line-height: 2rem;
  }
`

// Pinned Posts
export const PinnedPosts = styled.div``

// Pinned Post Container
export const PinnedPostContainer = styled(Link)`
  display: flex;
  text-decoration: none;
  background-color: ${Colors.lightGray};
  border-radius: 1rem;
  padding: 1.25rem 2rem;
  margin: 0 0 1rem 0;

  @media only screen and (min-width: 50rem) {
    padding: 1.5rem 2rem;
    margin: 0 0 1.5rem 0;
  }
`

// Pinned Post Icon
export const PinnedPostIcon = styled.div`
  margin: 0 1.5rem 0 0;
`

// Posts
export const Posts = styled.div`
  background-color: ${Colors.lightGray};
  border-radius: 1rem;
  padding: 1.5rem;

  @media only screen and (min-width: 50rem) {
    padding: 2rem;
  }
`

// Post Container
export const PostContainer = styled(Link)`
  text-decoration: none;
  display: flex;
  border-top: 1px solid ${Colors.grayOpacity25};
  padding: 1.5rem 0;

  &:first-child {
    padding-top: 0;
    border-top: none;
  }
`

// Post Row
export const PostRow = styled.div`
  flex: 1;
`

// Post Title
export const PostTitle = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  line-height: 1;
  color: ${Colors.dark};

  @media only screen and (min-width: 50rem) {
    font-size: 1.5rem;
  }
`

// Post Comments
export const PostComments = styled.div`
  position: relative;
  display: flex;
  width: 2rem;
  height: 2rem;
  margin: 0 1rem 0 0;

  svg {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    color: ${Colors.gray};
  }
`

export const CommentsCount = styled.div`
  margin: 0.4rem auto;
  position: relative;
  z-index: 10;
  color: ${Colors.white};
  font-weight: bold;
  font-size: 1rem;
  line-height: 1;
`

// Post Topic
export const PostTopic = styled.div`
  margin: 0.25rem 0 0 0;
  font-size: 1.25rem;
  line-height: 1;
  color: ${Colors.gray};
`