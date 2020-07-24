import React from "react";
import classes from './Users.module.css'


let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://is4-ssl.mzstatic.com/image/thumb/Purple128/v4/6d/e5/1f/6de51f5e-48e8-c63b-3a36-f17b1a7aa5c7/source/512x512bb.jpg',
                followed: true,
                fullName: 'Boss',
                status: 'admin',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/afafe003-d161-4420-b1f0-57deb451cc3c/d735gpp-8c322798-b10b-449a-91a6-43ee3cf57c37.png/v1/fill/w_543,h_690,strp/flippy_happy_tree_friend_png_by_miqita_d735gpp-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD02OTAiLCJwYXRoIjoiXC9mXC9hZmFmZTAwMy1kMTYxLTQ0MjAtYjFmMC01N2RlYjQ1MWNjM2NcL2Q3MzVncHAtOGMzMjI3OTgtYjEwYi00NDlhLTkxYTYtNDNlZTNjZjU3YzM3LnBuZyIsIndpZHRoIjoiPD01NDMifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.0oeGNejUPPMnVnqGP1Vj7jLt5ZfvFnfmE4-MOg-vqI4',
                followed: false,
                fullName: 'JAck',
                status: 'user',
                location: {city: 'New York', country: 'USA'}
            },
            {
                id: 3, photoUrl: 'https://mobile-master.org/wp-content/uploads/images/2142.jpg',
                followed: false,
                fullName: 'Valera',
                status: 'user',
                location: {city: 'Mikashevichi', country: 'Belarus'}
            },
            {
                id: 4, photoUrl: 'https://lamcdn.net/lookatme.ru/post_image-image/JS8qnux_6RFyKFRxFAqnRg-article.jpg',
                followed: true,
                fullName: 'Igor',
                status: 'user',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            ]
        )
    }

    return (
        <div>
            {
                props.users.map(u => <div key={u.id} className={classes.main}>
                        <img src={u.photoUrl} className={classes.avatar_img}/>
                        <div>
                            <p className={classes.text}>{u.fullName}</p>
                            <p className={classes.text}>{u.status}</p>
                            <p className={classes.text}>{u.location.country}</p>
                            <p className={classes.text}>{u.location.city}</p>
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
