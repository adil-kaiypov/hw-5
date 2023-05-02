import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../store/postsReducer";
import classes from './postsList.module.css';
import SinglePost from "../SinglePost/SinglePost";
const PostsList = () =>{
    const posts = useSelector(state => state.posts.posts);
    const dispatch = useDispatch();
    
    return(
        <>
            <button onClick={e => dispatch(fetchPosts())}>Get Posts</button>
            <ul>
                {posts.map(p => <SinglePost title={p.title} id = {p.id}/>)}
            </ul>
        </>
    )
};

export default PostsList;