import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    return (
    <div>
        <div>My posts</div>
        <textarea></textarea>
        <button>send</button>
        <div>
            <h2>My posts</h2>

            <Post message="Hi, how are you?" like_count='37'/>
            <Post message="it's my first post" like_count='-12'/>
            

        </div>  
    </div>
    )
}

export default MyPosts;