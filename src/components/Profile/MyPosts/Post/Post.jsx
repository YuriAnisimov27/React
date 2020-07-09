import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (  
        <div>
            <div className={classes.item}>
                <img src='https://www.meme-arsenal.com/memes/70a40133b015f46bdf0e43b8c39bc3b4.jpg'/>
                { props.message }
            </div>
            <div>
                <span>like { props.like_count }</span>
            </div>
        </div>   
    )
};

export default Post;