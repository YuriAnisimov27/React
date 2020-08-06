import React, { Component } from 'react';
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/defaultAvatar.png";
import * as axios from "axios";


export default class Users extends Component {

    constructor(props) {
        super(props);

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        return (
            <div>
                {
                    this.props.users.map(u => <div key={u.id} className={classes.main}>
                            <img src={ u.photos.small != null ? u.photos.small : userPhoto } className={classes.avatar_img}/>
                            <div>
                                <p className={classes.text}>{u.name}</p>
                                <p className={classes.text}>{u.status}</p>
                                <p className={classes.text}>{"u.location.country"}</p>
                                <p className={classes.text}>{"u.location.city"}</p>
                                {u.followed
                                    ? <button onClick={() => {
                                        this.props.unfollow(u.id)
                                    }}>Unfollow</button>
                                    : <button onClick={() => {
                                        this.props.follow(u.id)
                                    }}>Follow</button>}
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}
