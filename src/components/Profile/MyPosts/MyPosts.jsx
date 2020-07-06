import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postElements = props.posts.map( p => <Post message={p.post} like_count={p.like_count}/> );

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