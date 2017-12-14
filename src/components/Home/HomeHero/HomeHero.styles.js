// Libraries
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// Styles
import { Colors, Gradients, Fonts, BoxShadow } from '../../../styles'

// Hero
export const Hero = styled.div`
  display: flex;
  padding: 5rem 0;
`

// Hero Content
export const HeroContent = styled.div`
  max-width: 35%;
  margin-right: 4rem;
`

// Hero Title
export const HeroTitle = styled.div`
  color: ${Colors.dark};
  font-size: 4rem;
  line-height: 1;
  font-weight: bold;
  letter-spacing: -2px;
  font-family: ${Fonts.secondaryFont};
`

// Hero Intro
export const HeroIntro = styled.div`
  margin-top: 2rem;
  font-size: 1.5rem;
  line-height: 2rem;
  color: ${Colors.gray};
`

// Hero Links
export const HeroLinks = styled.div`
  margin-top: 2.5rem;
  background-color: ${Colors.lightGray};
  padding: 1rem;
  border-radius: 1rem;
`

// Hero Link Content
export const HeroLinkContent = styled.div``

// Hero Link Icon
export const HeroLinkIcon = styled.div`
  margin-right: 1rem;
  color: ${Colors.red};
`

// Hero Link Title
export const HeroLinkTitle = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 1;
  color: ${Colors.dark};
`

// Hero Link Intro
export const HeroLinkIntro = styled.div`
  margin: 0.25rem 0 0 0;
  font-size: 1.25rem;
  line-height: 1;
  color: ${Colors.gray};
`

// Hero Link
export const HeroLink = styled(Link)`
  text-decoration: none;
  display: flex;
  padding: 1rem;
  border-radius: 0.5rem;

  &:hover {
    background-image: ${Gradients.redToOrange};
    color: ${Colors.white};

    & ${HeroLinkIcon} { color: ${Colors.white}; }
    & ${HeroLinkTitle} { color: ${Colors.white}; }
    & ${HeroLinkIntro} {
      opacity: 0.8;
      color: ${Colors.white};
    }
  }
`

// Hero Illustration
export const HeroIllustration = styled.div`
  display: flex;
  flex: 1;
  background-image: url('images/hero-bg.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`

// Hero Illustration Column
export const HeroIllustrationColumn = styled.div`
  width: 50%;
  height: 35rem;
  display: flex;
  flex-direction: column;

  &:first-child { padding: 0 1.25rem 0 0; }
  &:last-child { padding: 0 0 0 1.25rem; }
`

// Hero Illustration Card 1
export const HeroIllustrationCard1 = styled.div`
  flex: 1;
  margin: 8rem 0 0 0;
  border-radius: 1rem;
  background-color: ${Colors.white};
  box-shadow: ${BoxShadow};
`

// Hero Illustration Card 2
export const HeroIllustrationCard2 = styled.div`
  flex: 1;
  border-radius: 1rem;
  background-color: ${Colors.white};
  box-shadow: ${BoxShadow};
`

// Hero Illustration Card 3
export const HeroIllustrationCard3 = styled.div`
  margin: 2.5rem 0 0 0;
  height: 15rem;
  border-radius: 1rem;
  background-color: ${Colors.dark};
  box-shadow: ${BoxShadow};
`