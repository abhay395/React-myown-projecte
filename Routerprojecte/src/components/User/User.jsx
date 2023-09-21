import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} =useParams()
    return (
        <div className='text-center text-gray-200 bg-gray-800 p-4' >User:{userid}</div>
    )
}

export default User
