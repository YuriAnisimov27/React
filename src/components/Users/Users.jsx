import React, { Component } from 'react';
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/defaultAvatar.png";
import * as axios from "axios";


export default class Users extends Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount)
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div className={classes.users}>
                <div>
                    { pages.map((p) => {
                        return <span className={this.props.currentPage === p && classes.selectedPage}
                                     onClick={ () => { this.onPageChanged(p) } }>{p}</span>
                    }) }
                </div>
                <br/>
                {
                    this.props.users.map(u => <div key={u.id} className={classes.main}>
                            <img src={ u.photos.small != null ? u.photos.small : userPhoto }
                                 className={classes.avatar_img}
                                 alt='avatar'/>
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
