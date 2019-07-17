import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import {composeWithDevTools} from "redux-devtools-extension";

const initialState = {
    things: [
        {
            name: 'test',
            uid: '12312312312'
        }
    ]
};

function rootReducer(state, action) {
    console.log(action.type);

    switch (action.type) {
        case "GET_THINGS_SUCCESS":
            return {things: action.json.things};
    }
    return state
}


export default function configureStore() {
    const store = createStore(
        rootReducer,
        initialState,
        composeWithDevTools(
            applyMiddleware(
                thunk,
            )
        )
    );
    return store;
}