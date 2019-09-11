import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk'
import socialReducer from 'reducers/socialReducer'
import globalReducer from 'reducers/globalReducer'
import {composeWithDevTools} from "redux-devtools-extension";

const markApp = combineReducers({
    social: socialReducer,
    global: globalReducer
});


export default function configureStore() {
    const store = createStore(
        markApp,
        composeWithDevTools(
            applyMiddleware(
                thunk,
            )
        )
    );
    return store;
}