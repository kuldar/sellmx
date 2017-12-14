// Libraries
import React from 'react'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// Components
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

// Styles
import { Colors, Wrapper } from '../../styles'

// Products View Container
export const ProductsViewContainer = styled.div`
  background-color: ${Colors.dark};
  color: ${Colors.white};
`

// Products View
class ProductsView extends React.Component {

  render () {
    const { allProductsQuery, loggedInUserQuery } = this.props
    if (allProductsQuery.loading || loggedInUserQuery.loading) return <div>Loading</div>

    const user = loggedInUserQuery.loggedInUser
    const products = allProductsQuery.allProducts

    return (
      <ProductsViewContainer>
        <Header
          user={user}
          currentPage='products'
          style='light' />
        <Wrapper>
          { products &&
            products.map(product => (
              <Link to={`/products/${product.slug}`} key={product.id}>{product.name}</Link>
          ))}
        </Wrapper>
        <Footer />
      </ProductsViewContainer>
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

// All products query
const allProductsQuery = gql`
  query AllProductsQuery {
    allProducts(orderBy: createdAt_DESC) {
      id
      name
      slug
      description
      topic {
        name
        slug
      }
      tags {
        name
      }
    }
  }
`

export default compose(
  graphql(loggedInUserQuery, { name: 'loggedInUserQuery', options: { fetchPolicy: 'network-only' } }),
  graphql(allProductsQuery, { name: 'allProductsQuery' })
)(ProductsView)