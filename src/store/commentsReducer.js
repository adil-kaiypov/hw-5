import { API } from "../api/api";

const FETCH_COMMENTS = 'FETCH_COMMENTS';
const ADD_COMMENTS = "ADD_COMMENTS";

const initialState = {
    comments: []
}

export const commentsReducer = (state = initialState, action) =>{
    if(action.type === FETCH_COMMENTS){
        return state;
    }else if(action.type === ADD_COMMENTS){
        return {...state, comments: action.payload} 
    }
    return state;
}

const addComments = payload => ({type: ADD_COMMENTS, payload});

export const fetchComments = (id) => {
    return dispatch => {
        API.get(`${id}/comments`)
            .then(response => dispatch(addComments(response.data)));
    };
};
