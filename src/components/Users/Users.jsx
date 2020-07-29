import React from "react";
import classes from './Users.module.css'
import * as axios from "axios";
import userPhoto from '../../assets/images/defaultAvatar.png';


let Users = (props) => {

    if (props.users.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items);
        });

    }

    return (
        <div>
            {
                props.users.map(u => <div key={u.id} className={classes.main}>
                        <img src={ u.photos.small != null ? u.photos.small : userPhoto } className={classes.avatar_img}/>
                        <div>
                            <p className={classes.text}>{u.name}</p>
                            <p className={classes.text}>{u.status}</p>
                            <p className={classes.text}>{"u.location.country"}</p>
                            <p className={classes.text}>{"u.location.city"}</p>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>}
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Users;
