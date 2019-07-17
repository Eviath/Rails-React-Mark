export function fetchSocials() {
    return dispatch => {
        dispatch(fetchSocialsBegin());
        return fetch("v1/socials.json")
            .then(response => response.json())
            .then(json => {
                dispatch(fetchSocialsSuccess(json.socials));
                return json.socials;
            })
            .catch(error => dispatch(fetchSocialsFailure(error)));
    };
}

export const FETCH_SOCIALS_BEGIN   = 'FETCH_SOCIALS_BEGIN';
export const FETCH_SOCIALS_SUCCESS = 'FETCH_SOCIALS_SUCCESS';
export const FETCH_SOCIALS_FAILURE = 'FETCH_SOCIALS_FAILURE';

export const fetchSocialsBegin = () => ({
    type: FETCH_SOCIALS_BEGIN
});

export const fetchSocialsSuccess = socials => ({
    type: FETCH_SOCIALS_SUCCESS,
    payload: { socials }
});

export const fetchSocialsFailure = error => ({
    type: FETCH_SOCIALS_FAILURE,
    payload: { error }
});