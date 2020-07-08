import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postElements = props.posts.map( p => <Post message={p.post} like_count={p.like_count}/> );

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    };

    return (
    <div className={classes.posts_block}>
        <h3>My posts</h3>
        <div>
            <textarea ref={newPostElement}></textarea>
        </div>
        <div>
            <button onClick={ addPost }>send</button>
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