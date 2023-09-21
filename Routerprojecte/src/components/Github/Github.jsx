import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const Data=useLoaderData()
    //  const [Data,setData]=useState({})
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/abhay395')
    //     .then((res)=>res.json())
    //     .then((res)=>setData(res))
    // },[])
    return (
        <div className='text-center m-4 bg-gray-700 text-white text-3xl p-4' >Github followers:{Data.followers}
        <img src={Data.avatar_url} alt="Git picture" width={'300px'} />
        </div>
    )
}

export default Github
export const githubInfoLoder=async()=>{
   const respose= await fetch("https://api.github.com/users/abhay395")
   return respose.json()
}
