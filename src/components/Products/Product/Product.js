// Libraries
import React from 'react'
import { Link } from 'react-router-dom'

// Styles
import { Wrapper, SecondaryButton } from '../../../styles'
import {
  ProductContainer,
  ProductHero,
  ProductHeroContent,
  ProductHeroTitle,
  ProductHeroTags,
  ProductHeroTag,
  ProductHeroBody,
  ProductHeroLead,
  ProductHeroIntro,
  ProductHeroButtons,
  ProductHeroButtonsRow,
  ProductHeroBuyButton,
  ProductHeroPreviewButton,
  ProductHeroLink,
  ProductHeroMedia,
  ProductHeroImage,
  ProductHeroVideo,

  ProductFeatures,
  ProductFeature,
  ProductFeatureTitle,
  ProductFeatureBody,

  ProductCta,
  ProductCtaImage,
  ProductCtaBody,
  ProductCtaTitle,
  ProductCtaLead,
  ProductCtaButtons
} from './Product.styles'

import { CommunityIcon, DocumentationIcon } from '../../../icons'

// Product
export default class Product extends React.Component {

  render () {
    const { product, handlePurchase} = this.props

    return (
      <Wrapper>
        <ProductContainer>

          {/* Product Hero */}
          <ProductHero>

            {/* Product Hero Content */}
            <ProductHeroContent>
              <ProductHeroTitle>{product.marketing.hero.title}</ProductHeroTitle>

              <ProductHeroTags>
                { product.tags &&
                  product.tags.map(tag => <ProductHeroTag key={tag.id}>{tag.name}</ProductHeroTag>)}
              </ProductHeroTags>

              <ProductHeroBody>
                <ProductHeroLead>{product.marketing.hero.lead}</ProductHeroLead>
                <ProductHeroIntro>{product.marketing.hero.intro}</ProductHeroIntro>
              </ProductHeroBody>

              <ProductHeroButtons>
                <ProductHeroButtonsRow>
                  <ProductHeroBuyButton to={product.marketing.links.buy}>Buy {product.name}</ProductHeroBuyButton>
                </ProductHeroButtonsRow>
                <ProductHeroButtonsRow>
                  <ProductHeroPreviewButton to={product.marketing.links.preview1}>Live Preview 1</ProductHeroPreviewButton>
                  <ProductHeroPreviewButton to={product.marketing.links.preview2}>Live Preview 2</ProductHeroPreviewButton>
                </ProductHeroButtonsRow>
                <ProductHeroButtonsRow>
                  <ProductHeroLink to={`/products/${product.slug}/documentation`}>
                    <DocumentationIcon />
                    <span>Documentation</span>
                  </ProductHeroLink>
                  <ProductHeroLink to={`/forum/${product.topic.slug}`}>
                    <CommunityIcon />
                    <span>Forum topic</span>
                  </ProductHeroLink>
                </ProductHeroButtonsRow>
              </ProductHeroButtons>
            </ProductHeroContent>

            {/* Product Hero Image */}
            <ProductHeroMedia>
              <ProductHeroImage src={product.marketing.hero.image} alt={product.marketing.hero.title} />
            </ProductHeroMedia>

          </ProductHero>

          {/* Product Features */}
          <ProductFeatures>
            { product.marketing.features.map(feature => (
                <ProductFeature>
                  <ProductFeatureTitle>{feature.title}</ProductFeatureTitle>
                  <ProductFeatureBody>{feature.body}</ProductFeatureBody>
                </ProductFeature>
              )) }
          </ProductFeatures>

          {/* Product CTA */}
          <ProductCta>
            <ProductCtaImage />
            <ProductCtaBody>
              <ProductCtaTitle>{product.marketing.hero.title}</ProductCtaTitle>
              <ProductCtaLead>{product.marketing.hero.lead}</ProductCtaLead>
            </ProductCtaBody>
            <ProductCtaButtons>
              <SecondaryButton to={product.marketing.links.preview1}>Live Preview</SecondaryButton>
              <SecondaryButton to={product.marketing.links.buy}>Buy {product.name}</SecondaryButton>
            </ProductCtaButtons>
          </ProductCta>

          {/* Product Documentation */}
          <div>documentation</div>

          {/* Product Topic */}
          <div>topic</div>

        </ProductContainer>
      </Wrapper>
    )
  }
}
