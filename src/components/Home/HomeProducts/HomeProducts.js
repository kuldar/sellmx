// Libraries
import React from 'react'

// Styles
import {
  Products,
  Header,
  Title,
  SmallTitle,
  MainTitle,
  HeaderButton
} from './HomeProducts.styles'

// Styles
import { Wrapper, MainButton } from '../../../styles'

// Home Products
export default class HomeProducts extends React.Component {
  render () {

    return (
      <Products>
        <Wrapper>

          <Header>
            <Title>
              <SmallTitle>Focus on sales</SmallTitle>
              <MainTitle>All your marketing resources in one place</MainTitle>
            </Title>

            <MainButton to='/products'>View all products</MainButton>
          </Header>

          <div>
            <strong>Product</strong>
            <strong>Product</strong>
            <strong>Product</strong>
          </div>

        </Wrapper>
      </Products>
    )
  }
}
