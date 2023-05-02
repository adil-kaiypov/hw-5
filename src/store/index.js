import { combineReducers, legacy_createStore as createStore, applyMiddleware } from "redux";
import { postsReducer } from "./postsReducer";
import thunk from 'redux-thunk';
import { commentsReducer } from "./commentsReducer";

const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));