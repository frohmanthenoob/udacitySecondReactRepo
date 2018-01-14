import { UPDATE_POST } from '../actions'
import { combineReducers } from 'redux'

function post(state={},action){
    const { id, title, body } = action
    switch(action.type){
        case UPDATE_POST:
            return {
                ...state,
                id,
                title,
                body,
            }
        case UPDATE_POST:
            return {
                ...state,
                id,
                title,
                body,
            }
        case UPDATE_POST:
            return {
                ...state,
                id,
                title,
                body,
            }
        default:
            return state
    }

}

function comment(state={},action){
    const { id, title, body } = action
    switch(action.type){
        case UPDATE_POST:
            return {
                ...state,
                id,
                title,
                body,
            }
        default:
            return state
    }
}





export const reducers = combineReducers({
    post,
    comment,
})