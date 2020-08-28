import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/defaultAvatar.png";
import {NavLink} from "react-router-dom";


let Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={classes.users}>
      <div>
        {pages.map((p) => {
          return <span className={props.currentPage === p && classes.selectedPage}
                       onClick={() => {
                         props.onPageChanged(p)
                       }}>{p}</span>
        })}
      </div>
      <br/>
      {
        props.users.map(u => <div key={u.id} className={classes.main}>
            <NavLink to={'/profile/' + u.id}>
              <img src={u.photos.small != null ? u.photos.small : userPhoto}
                   className={classes.avatar_img}
                   alt='avatar'/>
            </NavLink>

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