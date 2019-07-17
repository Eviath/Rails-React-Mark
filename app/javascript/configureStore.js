import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import socialReducer from 'reducers/socialReducer'
import {composeWithDevTools} from "redux-devtools-extension";

export default function configureStore() {
    const store = createStore(
        socialReducer,
        composeWithDevTools(
            applyMiddleware(
                thunk,
            )
        )
    );
    return store;
}