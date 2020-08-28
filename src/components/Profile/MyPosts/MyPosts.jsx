import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

  let postElements = props.posts.map(p => <Post message={p.message} like_count={p.like_count}/>);

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={classes.posts_block}>
      <h3>My posts</h3>
      <div>
        <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}/>
      </div>
      <div>
        <button onClick={onAddPost}>send</button>
      </div>

      <div>
        <div className={classes.posts}>

          {postElements}

        </div>
      </div>
    </div>
  )
}

export default MyPosts;
