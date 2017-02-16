import React from 'react'
import { connect } from 'react-redux'
import PostsComponent from '../components/Posts'

const mapStateToProps = (state) => {
  let posts = []
  const keyword = state.routing.locationBeforeTransitions.query.keyword
  if (state.PostsReducer.posts) {
    if (keyword) {
      posts = state.PostsReducer.posts.filter((post) => {
        return post.tags.includes(keyword)
      })
    } else {
      posts = state.PostsReducer.posts
    }
  }
  return {
    posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const Posts = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsComponent)

export default Posts
