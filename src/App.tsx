import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

import customTheme from './utils/theme'
import Landing from './pages/Landing'

export default function App() {
  return (
    <ChakraProvider theme={ customTheme }>
      <Router>
        <Switch>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  )
}
