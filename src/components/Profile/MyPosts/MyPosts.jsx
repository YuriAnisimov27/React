import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsData = [
        { id: 1, post: "it's my first post", like_count: 37 },
        { id: 2, post: 'Hello World!', like_count: -12 },
        { id: 3, post: 'Hi, how are you?', like_count: 0 },
    ]

    return (
    <div className={classes.posts_block}>
        <h3>My posts</h3>
        <div><textarea></textarea></div>
        <div><button>send</button></div>

        <div>
            <div className={classes.posts}>
                <Post message={postsData[0].post} like_count={postsData[0].like_count}/>
                <Post message={postsData[1].post} like_count={postsData[1].like_count}/>
                <Post message={postsData[2].post} like_count={postsData[2].like_count}/>
            </div>
        </div>  
    </div>
    )
}

export default MyPosts;