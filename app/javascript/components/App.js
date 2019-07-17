import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import { Provider } from 'react-redux'
import Home from '../pages/Home'

import configureStore from '../configureStore'
const store = configureStore();

class App extends React.Component {
  render () {
    return (
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </BrowserRouter>
        </Provider>
    );
  }
}

export default App
