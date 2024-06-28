import React from 'react'

const User = ({name,fname,age,gender}) => {
    return (
        <div>
            <h1>{name}</h1>
            <h1>{fname}</h1>
            <h1>{age}</h1>
            <h1>{gender}</h1>

        </div>
    )
}

export default User
