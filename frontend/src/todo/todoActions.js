import axios from 'axios';

const URL = 'http://localhost:3000/api/todos';

/**
 * action types
 */

export const DESCRIPTION_CHANGED = 'DESCRIPTION_CHANGED';
export const TODO_SEARCHED = 'TODO_SEARCHED';
export const TODO_ADDED = 'TODO_ADDED'

/**
 * action creators
 * @param {*} e  
 */
export const changedDescription = (e) => ({
    type: DESCRIPTION_CHANGED ,
    payload: e.target.value
}); 

export const search = () => {
    const request = axios.get(`${URL}?sort=-createdAt`);
    return {
        type: TODO_SEARCHED,
        payload: request
    }
} 

export const add = description => {
    return dispatch => {
        axios.post(URL, {description})
            .then(resp => dispatch({type: TODO_ADDED, payload: resp.data}))
            .then(resp => dispatch(search()))
    }
}