import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    return (
    <div className={classes.posts_block}>
        <h3>My posts</h3>
        <div><textarea></textarea></div>
        <div><button>send</button></div>

        <div>
            <div className={classes.posts}>
                <Post message="Hi, how are you?" like_count='37'/>
                <Post message="it's my first post" like_count='-12'/>
            </div>
        </div>  
    </div>
    )
}

export default MyPosts;