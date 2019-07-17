import {
    FETCH_SOCIALS_BEGIN,
    FETCH_SOCIALS_SUCCESS,
    FETCH_SOCIALS_FAILURE
} from '../actions/socialActions';

const initialState = {
    socials: [],
    loading: false,
    error: null
};

export default function socialReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_SOCIALS_BEGIN:
            // Mark the state as "loading" so we can show a spinner or something
            // Also, reset any errors. We're starting fresh.
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_SOCIALS_SUCCESS:
            // All done: set loading "false".
            // Also, replace the items with the ones from the server
            return {
                ...state,
                loading: false,
                socials: action.payload.socials
            };

        case FETCH_SOCIALS_FAILURE:
            // The request failed. It's done. So set loading to "false".
            // Save the error, so we can display it somewhere.
            // Since it failed, we don't have items to display anymore, so set `items` empty.
            //
            // This is all up to you and your app though:
            // maybe you want to keep the items around!
            // Do whatever seems right for your use case.
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                socials: []
            };

        default:
            // ALWAYS have a default case in a reducer
            return state;
    }
}