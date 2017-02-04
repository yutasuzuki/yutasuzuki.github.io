import React from 'react'
import { Link } from 'react-router'

const Post = (state) => {
  return (
    <section className={'post'}>
      <Link to={{ pathname: `/detail`, query: { post: state.id } }}>
        <h1 className={'postTitle'}>{state.title}</h1>
      </Link>
      <p className={'postText'}>{state.text}</p>
    </section>

  )
}

export default Post
