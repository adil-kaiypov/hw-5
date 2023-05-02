import { API } from "../api/api";

const FETCH_POSTS = 'FETCH_POSTS';
const ADD_POSTS = "ADD_POSTS";

const initialState = {
    posts: []
}

export const postsReducer = (state = initialState, action) =>{
    if(action.type === FETCH_POSTS){
        return state;
    }else if(action.type === ADD_POSTS){
        return {...state, posts: action.payload}
    }
    return state;
}

const addPosts = payload => ({type: ADD_POSTS, payload});

export const fetchPosts = () => {
    return dispatch => {
        API.get()
            .then(response => dispatch(addPosts(response.data)));
    };
};