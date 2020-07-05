import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let posts = [
        { id: 1, post: "it's my first post", like_count: 37 },
        { id: 2, post: 'Hello World!', like_count: 12 },
        { id: 3, post: 'Hi, how are you?', like_count: 40 },
    ]

    let postElements = posts.map( p => <Post message={p.post} like_count={p.like_count}/> );

    return (
    <div className={classes.posts_block}>
        <h3>My posts</h3>
        <div><textarea></textarea></div>
        <div><button>send</button></div>

        <div>
            <div className={classes.posts}>

                {postElements}

            </div>
        </div>  
    </div>
    )
}

export default MyPosts;