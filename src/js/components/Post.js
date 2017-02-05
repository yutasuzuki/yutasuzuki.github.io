import React from 'react'
import { Link } from 'react-router'

const Post = (state) => {
  return (
    <section className={'post'}>
      <Link to={{ pathname: `/detail`, query: { post: state.id } }}>
        <h1 className={'post__title'}>{state.title}</h1>
      </Link>
      <p className={'postText'}>{state.text.slice(0,20)}</p>
    </section>
  )
}
export default Post
