import { useState } from "react"

function Display({ userData }) {
    return (
        <div>
            <h1>{userData.name}</h1>
            <img src={userData.avatar_url} alt="profile pic"/>
            <a href={userData.html_url} target="blank">
                <h3>Profile Page</h3>
            </a>
            {userData.location && <h3>Location: {userData.location}</h3>}
            {userData.email && <h3>Email: {userData.email}</h3>}
        </div>
    )
}

export default Display