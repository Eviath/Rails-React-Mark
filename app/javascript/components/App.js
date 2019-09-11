import React from "react"
import {Provider} from 'react-redux'

import configureStore from '../configureStore'

import AppRootComponent from "./AppRootComponent";
const store = configureStore();

class App extends React.Component {

    render () {
    return (
        <Provider store={store}>
           <AppRootComponent/>
        </Provider>
    );
  }
}


export default App;


