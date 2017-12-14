// Libraries
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ApolloClient } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { createHttpLink } from 'apollo-link-http'
import { ApolloLink} from 'apollo-link'
import { InMemoryCache } from 'apollo-cache-inmemory'

// Config
import config from './config'

// Views
import HomeView from './views/Home/HomeView'
import SignupView from './views/Sessions/SignupView'
import LoginView from './views/Sessions/LoginView'

import ProductView from './views/Products/ProductView'
import ProductsView from './views/Products/ProductsView'
import ProductDocumentationView from './views/Products/ProductDocumentationView'

import ForumView from './views/Forum/ForumView'
import ForumTopicView from './views/Forum/ForumTopicView'
import ForumPostView from './views/Forum/ForumPostView'
import NewForumPostView from './views/Forum/NewForumPostView'

import MemberView from './views/Members/MemberView'

import ServicesView from './views/Services/ServicesView'

// Create http link to GraphCool
const httpLink = createHttpLink({ uri: config.graphCool.simpleApi })

// Configure middleware
const middlewareLink = new ApolloLink((operation, forward) => {

  // Get auth token from local storage
  const token = localStorage.getItem(config.graphCool.authToken)

  // Return with authorization header or null
  const authorizationHeader = token ? `Bearer ${token}` : null
  operation.setContext({ headers: { authorization: authorizationHeader } })
  return forward(operation)
})

// Add auth to http link
const httpLinkWithAuthToken = middlewareLink.concat(httpLink)

// Create client
const client = new ApolloClient({
  link: httpLinkWithAuthToken,
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__)
})

// Render app
ReactDOM.render((
  <ApolloProvider client={client}>
    <Router>
      <Switch>
        <Route exact path='/' component={HomeView} />
        <Route exact path='/services' component={ServicesView} />

        <Route exact path='/signup' component={SignupView} />
        <Route exact path='/login' component={LoginView} />

        <Route exact path='/products' component={ProductsView} />
        <Route exact path='/products/:slug' component={ProductView} />
        <Route exact path='/products/:slug/documentation' component={ProductDocumentationView} />

        <Route exact path='/forum' component={ForumView} />
        <Route exact path='/forum/new' component={NewForumPostView} />
        <Route exact path='/forum/new/:topicSlug' component={NewForumPostView} />
        <Route exact path='/forum/:slug' component={ForumTopicView} />
        <Route exact path='/forum/:topicSlug/:postSlug' component={ForumPostView} />
        <Route exact path='/forum/:topicSlug/:postSlug/:commentShortId' component={ForumPostView} />

        <Route exact path='/members/:slug' component={MemberView} />
      </Switch>
    </Router>
  </ApolloProvider>
  ), document.getElementById('root')
)