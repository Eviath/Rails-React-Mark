import React from "react"
import { Provider } from 'react-redux'

// Import store
import configureStore from '../configureStore'
import AdminRootComponent from "./AdminRootComponent";
const store = configureStore();

class Admin extends React.Component {
    render () {
        return (
            <Provider store={store}>
                <AdminRootComponent/>
            </Provider>
        );
    }
}

export default Admin
