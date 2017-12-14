// Libraries
import React from 'react'

// Styles
import {
  Hero,
  HeroTitle,
  HeroIntro,
  HeroLinks,
  HeroLink,
  HeroLinkContent,
  HeroLinkIcon,
  HeroLinkTitle,
  HeroLinkIntro,
  HeroContent,
  HeroIllustration,
  HeroIllustrationColumn,
  HeroIllustrationCard1,
  HeroIllustrationCard2,
  HeroIllustrationCard3
} from './HomeHero.styles'

// Styles
import { Wrapper } from '../../../styles'

// Icons
import {
  ProductsIconBig,
  CommunityIconBig,
  ServicesIconBig
} from '../../../icons'

// Home Hero
export default class HomeHero extends React.Component {
  render () {

    return (
      <Wrapper>
        <Hero>

          <HeroContent>

            <HeroTitle>Level up your marketing</HeroTitle>
            <HeroIntro><strong>Landing pages, newsletters, sales funnels</strong> and more resources for ecommerce and SAAS products.</HeroIntro>

            <HeroLinks>
              <HeroLink to='/products'>
                <HeroLinkIcon><ProductsIconBig /></HeroLinkIcon>
                <HeroLinkContent>
                  <HeroLinkTitle>Resources</HeroLinkTitle>
                  <HeroLinkIntro>Free and premium templates</HeroLinkIntro>
                </HeroLinkContent>
              </HeroLink>

              <HeroLink to='/forum'>
                <HeroLinkIcon><CommunityIconBig /></HeroLinkIcon>
                <HeroLinkContent>
                  <HeroLinkTitle>Community</HeroLinkTitle>
                  <HeroLinkIntro>Get help and advice on forums</HeroLinkIntro>
                </HeroLinkContent>
              </HeroLink>

              <HeroLink to='/services'>
                <HeroLinkIcon><ServicesIconBig /></HeroLinkIcon>
                <HeroLinkContent>
                  <HeroLinkTitle>Services</HeroLinkTitle>
                  <HeroLinkIntro>Need custom help? We’re here</HeroLinkIntro>
                </HeroLinkContent>
              </HeroLink>
            </HeroLinks>
          </HeroContent>

          <HeroIllustration>
            <HeroIllustrationColumn>
              <HeroIllustrationCard1></HeroIllustrationCard1>
            </HeroIllustrationColumn>
            <HeroIllustrationColumn>
              <HeroIllustrationCard2></HeroIllustrationCard2>
              <HeroIllustrationCard3></HeroIllustrationCard3>
            </HeroIllustrationColumn>
          </HeroIllustration>

        </Hero>
      </Wrapper>
    )
  }
}
