import React from 'react'
import Post from '../containers/Post'

const Posts = ({ posts ,images }) => {
  return (
    <div>
      {posts.map(post =>
        <Post
          key={post.id}
          {...post}
        />
      )}
    </div>
  )
}

export default Posts
