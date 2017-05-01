import axios from 'axios';

const URL = 'http://localhost:3000/api/todos';

/**
 * action types
 */

export const DESCRIPTION_CHANGED = 'DESCRIPTION_CHANGED';
export const TODO_SEARCHED = 'TODO_SEARCHED';
export const TODO_ADDED = 'TODO_ADDED';
export const CLEAR_SEARCH = 'CLEAR_SEARCH';

/**
 * action creators
 * @param {*} e  
 */
export const changedDescription = (e) => ({
    type: DESCRIPTION_CHANGED ,
    payload: e.target.value
}); 

export const search = () => {

    return (dispatch, getState) => {
        const description = getState().todo.description;
        const search = description ? `&description__regex=/${description}/` : '';
        const request = axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => dispatch({type: TODO_SEARCHED, payload: resp.data}))
    }
} 

export const add = description => {
    return dispatch => {
        axios.post(URL, {description})
            .then(resp => dispatch(clearSearch()))
            .then(resp => dispatch(search()))
    }
}

export const markAsDone = todo => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, {...todo, done: true})
            .then(resp => dispatch(search()))
    }
}

export const markAsPendind = todo => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, {...todo, done: false})
            .then(resp => dispatch(search()));
    }
} 

export const deleteTodo = todo => {
    return dispatch => {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => dispatch(search()));
    }
}

export const clearSearch = () => (
    [{ type: CLEAR_SEARCH } , search()]
)