import React from 'react'
import Post from './Post'
import UsersPost from './UsersPost'
import PostTesting from './PostTesting'

export default function ForYou() {
  return (
    <div className=' text-white h-auto'>
      <PostTesting/>
      {/* <Post/> */}
      <UsersPost/>
    </div>
  )
}
