import { useState } from 'react';
import classes from './singlePost.module.css'
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from '../../store/commentsReducer';

const SinglePost = ({ title, id }) => {
    const comments = useSelector((state) =>
      state.comments.comments.filter((c) => c.postId === id)
    );
    const [isShown, setIsShown] = useState(false);
    const dispatch = useDispatch();
  
    const showComments = () => {
      setIsShown(!isShown);
      dispatch(fetchComments(id));
      console.log(comments)
    };
  
    return (
      <>
        <div className={classes.post}>
          <h2 onClick={showComments}>{title}</h2>
          {isShown && (
            <div className={classes.comments}>
                <ol>
                    {comments.map((c) => <li key={c.id}>{c.name}</li>)} 
                </ol>
            </div>
          )}
        </div>
        
      </>
    );
  };
  

export default SinglePost;