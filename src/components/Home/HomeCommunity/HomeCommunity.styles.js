// Libraries
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// Styles
import { Colors, Fonts } from '../../../styles'

// Community
export const Community = styled.div`
  padding: 5rem 0;
`

// Community Title
export const CommunityTitle = styled.h2`
  font-size: 3rem;
  line-height: 1;
  font-weight: bold;
  letter-spacing: -1px;
  font-family: ${Fonts.secondaryFont};
  margin: 0 0 1.5rem 0;
`

// Community Intro
export const CommunityIntro = styled.div`
  margin: 0 0 2rem 0;
  font-size: 1.5rem;
  line-height: 2rem;
  color: ${Colors.gray};
`

// Pinned Post
export const PinnedPost = styled(Link)`
  display: flex;
  text-decoration: none;
  background-color: ${Colors.lightGray};
  border-radius: 1rem;
  padding: 1.5rem 2rem;
  margin: 0 0 1.5rem 0;
`

// Pinned Post Icon
export const PinnedPostIcon = styled.div`
  margin: 0 1.5rem 0 0;
`

// Posts
export const Posts = styled.div`
  background-color: ${Colors.lightGray};
  border-radius: 1rem;
  padding: 2rem;
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
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1;
  color: ${Colors.dark};
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