import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';


const Profile = (props) => {
    return (
    <div className={classes.content}>
        <div><img src='https://wallpapercrafter.com/uploads/posts/81523-___morning-panorama-in-ubud.jpg' alt='picture'/></div>
        <div>ava + descripton</div>
        <div><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSxLkbtTa0kfmKizxJgqECQLdlt_xq1R2jEQQ&usqp=CAU' alt='avatar' className={classes.avatar}/></div>
          
        <MyPosts />
    </div>
    )
}

export default Profile;