import { DESCRIPTION_CHANGED, TODO_SEARCHED, CLEAR_SEARCH } from './todoActions';

const INITIAL_STATE = { description: '', list: [] }

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case DESCRIPTION_CHANGED:
            return {...state, description: action.payload}
        case TODO_SEARCHED:
            return {...state, list: action.payload}
        case CLEAR_SEARCH:
            return {...state, description: ''}
        default:
            return state
    }
}