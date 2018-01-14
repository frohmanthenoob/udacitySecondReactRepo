export const ADD_POST = 'ADD_POST'
export const UPDATE_POST = 'UPDATE_POST'
export const UPVOTE_POST = 'UPVOTE_POST'
export const DOWNVOTE_POST = 'DOWNVOTE_POST'
export const DELETE_POST = 'DELETE_POST'

export const ADD_COMMENT = 'ADD_COMMENT'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const UPVOTE_COMMENT = 'UPVOTE_COMMENT'
export const DOWNVOTE_COMMENT = 'DOWNVOTE_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'

export const CHANG_CATEGORY = 'DELETE_COMMENT'


export function update_post (post={}){
    return {
        type:UPDATE_POST,
        post
    }
}