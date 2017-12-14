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

// Styles
import { Wrapper, MainButton, Colors } from '../../styles'

// Product Documentation
export const ProductDocumentation = styled.div`
  background-color: ${Colors.dark};
  color: ${Colors.white};
`

// Product Documentation View
class ProductDocumentationView extends React.Component {

  render () {
    const { productQuery, loggedInUserQuery } = this.props

    // Check if loading
    if (productQuery.loading || loggedInUserQuery.loading) return <div>Loading</div>
    const product = productQuery.Product
    const user = loggedInUserQuery.loggedInUser

    return (
      <ProductDocumentation>

        <Header user={user} currentPage='products' style='light' />
        <Wrapper>

          <div><h1>{product.name}</h1></div>
          <br/>
          <div><strong>Description:</strong></div>
          <div>{product.description}</div>
          <br/>
          <div><strong>Forum topic:</strong></div>
          <div><Link to={`/forum/${product.topic.slug}`}>{product.topic.name}</Link></div>
          <br/>
          <div><strong>Documentation:</strong></div>
          <div><Link to={`/products/${product.slug}/documentation`}>{product.name} Documentation</Link></div>
          <br/>
          <div><strong>Tags:</strong></div>
          { product.tags && product.tags.map(tag => <div key={tag.id}>{tag.name}</div>) }

          <MainButton to='#!'>Buy</MainButton>
        </Wrapper>
        <Footer />
      </ProductDocumentation>
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
)(ProductDocumentationView)