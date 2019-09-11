export function fetchSocials() {
    return dispatch => {
        dispatch(fetchSocialsBegin());
        return fetch("/v1/socials.json")
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



export function deleteSocials(social_id) {
    return dispatch => {
        dispatch(deleteSocialsBegin());
        const token = document.querySelector('meta[name="csrf-token"]');
        return fetch(`/admin/socials/` + social_id, {
            method: 'DELETE',
            headers: {
                'X-CSRF-Token': token.content,
                'Content-Type': 'application/json'
            }
        })
            .then(json => {dispatch(fetchSocials())})
            .catch(error => dispatch(deleteSocialsFailure(error)));
    };
}

export const DELETE_SOCIALS_BEGIN   = 'DELETE_SOCIALS_BEGIN';
export const DELETE_SOCIALS_SUCCESS = 'DELETE_SOCIALS_SUCCESS';
export const DELETE_SOCIALS_FAILURE = 'DELETE_SOCIALS_FAILURE';

export const deleteSocialsBegin = () => ({
    type: DELETE_SOCIALS_BEGIN
});

export const deleteSocialsSuccess = socials => ({
    type: DELETE_SOCIALS_SUCCESS,
    payload: { }
});

export const deleteSocialsFailure = error => ({
    type: DELETE_SOCIALS_FAILURE,
    payload: { error }
});