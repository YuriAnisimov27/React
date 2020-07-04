import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
    <div>
        <div><img src='https://wallpapercrafter.com/uploads/posts/81523-___morning-panorama-in-ubud.jpg' alt='picture'/></div>
        <div className={classes.description_block}>
            <div>ava + descripton</div>
            <div><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSxLkbtTa0kfmKizxJgqECQLdlt_xq1R2jEQQ&usqp=CAU' alt='avatar' className={classes.avatar}/></div>
        </div>
    </div>
    )
}

export default ProfileInfo;