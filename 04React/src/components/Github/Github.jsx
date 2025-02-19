import React, { use } from 'react'
import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Github() {
    const data = useLoaderData()
    /*
    const [data, setData] = useState({})
    useEffect(() => {
        fetch('https://api.github.com/users/hiteshchoudhary')
        .then(response => response.json())
        .then(data => setData(data)
)
    },[])
    */
  return (
    <div className='text-center m-4 bg-gray-600 text-white text-3xl
    '>Github Followers: {data.followers}
    <img src={data.avatar_url} alt='avatar' className='rounded-full shadow-lg'/>

    </div>
  )
}



export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    const data = await response.json()
    return data
}