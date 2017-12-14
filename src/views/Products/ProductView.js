// Libraries
import React from 'react'
import { graphql, compose } from 'react-apollo'
import { Link } from 'react-router-dom'
import gql from 'graphql-tag'
import styled from 'styled-components'

// Config
import config from '../../config'

// Components
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Product from '../../components/Products/Product/Product'

// Styles
import { Colors } from '../../styles'

// Product View Container
export const ProductViewContainer = styled.div`
  background-color: ${Colors.dark};
  color: ${Colors.white};
`

// Setup Paddle
// const PaddleSDK = require('paddle-sdk')
// const paddle = new PaddleSDK(config.paddle.vendorId, config.paddle.apiKey)

// Product View
class ProductView extends React.Component {

  handlePurchase = async (product) => {
    // const products = await paddle.getProducts()
    // return console.log(products)
  }

  render () {
    const { productQuery, loggedInUserQuery } = this.props

    // Check if loading
    if (productQuery.loading || loggedInUserQuery.loading) return <div>Loading</div>
    const product = productQuery.Product
    const user = loggedInUserQuery.loggedInUser

    return (
      <ProductViewContainer>
        <Header user={user} currentPage='products' style='light' />
        <Product product={product} handlePurchase={this.handlePurchase} />
        <Footer />
      </ProductViewContainer>
    )
  }
}

// Current user
const loggedInUserQuery = gql`
  query LoggedInUserQuery {
    loggedInUser {
      id
      name
      email
      slug
    }
  }
`

// Product query
const productQuery = gql`
  query ProductQuery($slug: String!) {
    Product(slug: $slug) {
      id
      name
      slug
      description
      paddleId
      documentation
      marketing
      topic {
        name
        slug
      }
      tags {
        id
        name
      }
    }
  }
`

export default compose(
  graphql(loggedInUserQuery, { name: 'loggedInUserQuery', options: { fetchPolicy: 'network-only' } }),
  graphql(productQuery, {
    name: 'productQuery',
    options: ({ match }) => ({ variables: { slug: match.params.slug }})
  })
)(ProductView)