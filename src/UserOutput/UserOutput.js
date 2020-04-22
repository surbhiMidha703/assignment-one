import React from 'react'

const UserOutput = (props) => {
    return (
        <div>
            <p> UserName: {props.userName} this is para 1</p>
            <p> UserName: {props.userName} this is para 2</p>
            <hr/>
        </div>
    )
}

export default UserOutput