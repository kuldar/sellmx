// Libraries
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// Styles
import { Gradients, Colors, Fonts, MainButton, SecondaryButton } from '../../../styles'

// Product Container
export const ProductContainer = styled.div``

// Product Hero
export const ProductHero = styled.div`
  margin: 5rem 0;
  display: flex;
  align-items: center;
`

// Product Hero Content
export const ProductHeroContent = styled.div`
  max-width: 25rem;
`

// Product Hero Title
export const ProductHeroTitle = styled.h1`
  margin: 0 0 2rem 0;
  color: ${Colors.white};
  font-size: 4rem;
  line-height: 1;
  font-weight: bold;
  font-family: ${Fonts.secondaryFont};
  letter-spacing: -1.5px;
`

// Product Hero Tags
export const ProductHeroTags = styled.div``

// Product Hero Tag
export const ProductHeroTag = styled.div`
  margin: 0 1rem 0 0;
  color: ${Colors.gray2};
  display: inline-block;
  font-weight: bold;
  line-height: 1;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  background-color: ${Colors.whiteOpacity10};
`

// Product Hero Body
export const ProductHeroBody = styled.div`
  margin: 2rem 0 0 0;
`

// Product Hero Lead
export const ProductHeroLead = styled.div`
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: bold;
  margin: 0 0 1rem 0;
`

// Product Hero Intro
export const ProductHeroIntro = styled.div`
  font-size: 1.5rem;
  line-height: 2rem;
  color: ${Colors.gray2};
`

// Product Hero Buttons
export const ProductHeroButtons = styled.div`
  margin: 2rem 0 0 0;
  display: flex;
  flex-direction: column;
`

// Product Hero Buttons Row
export const ProductHeroButtonsRow = styled.div`
  display: flex;
  margin: 0 0 1rem 0;

  & > * { margin: 0 1rem 0 0; }
  & > *:last-child { margin: 0; }
`

// Product Hero Buy Button
export const ProductHeroBuyButton = styled(MainButton)`
  flex:1;
`

// Product Hero Preview Button
export const ProductHeroPreviewButton = styled(SecondaryButton)`
  flex:1;
`

// Product Hero Link
export const ProductHeroLink = styled(Link)`
  flex: 1;
  padding: 0.75rem;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;
  color: ${Colors.gray2};

  svg {
    margin: 0 0.5rem 0 0;
    color: ${Colors.gray};
  }

  &:hover {
    svg { color: ${Colors.red}; }
    color: ${Colors.white};
  }
`

// Product Hero Media
export const ProductHeroMedia = styled.div`
  padding: 0 0 0 2rem;
  flex: 1;
`

// Product Hero Image
export const ProductHeroImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
`

// Product Hero Video
export const ProductHeroVideo = styled.div``

// Product Features
export const ProductFeatures = styled.div`
  margin: 5rem -2rem 0 -2rem;
  display: flex;
  flex-wrap: wrap;
`

// Product Feature
export const ProductFeature = styled.div`
  width: 33%;
  padding: 0 2rem;
  margin: 0 0 6rem 0;
`

// Product Feature Title
export const ProductFeatureTitle = styled.h2`
  font-size: 2.5rem;
  line-height: 1;
  font-weight: bold;
  font-family: ${Fonts.secondaryFont};
  margin: 0 0 2rem 0;
`

// Product Feature Body
export const ProductFeatureBody = styled.div`
  font-size: 1.5rem;
  line-height: 2rem;
  color: ${Colors.gray2};
`

// Product CTA
export const ProductCta = styled.div`
  display: flex;
  align-items: center;
  background-image: ${Gradients.redToOrange};
  padding: 2.5rem;
  border-radius: 1rem;
`

// Product CTA Image
export const ProductCtaImage = styled.div``

// Product CTA Body
export const ProductCtaBody = styled.div`
  flex: 1;
`

// Product CTA Title
export const ProductCtaTitle = styled.h4`
  font-size: 2.5rem;
  line-height: 1;
  font-family: ${Fonts.secondaryFont};
  font-weight: bold;
  margin: 0 0 1rem 0;
`

// Product CTA Lead
export const ProductCtaLead = styled.div`
  font-size: 1.5rem;
  line-height: 2rem;
  opacity: 0.8;
`

// Product CTA Buttons
export const ProductCtaButtons = styled.div`
  ${SecondaryButton} { margin: 0 0 0 1rem; }
`