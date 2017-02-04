import React from 'react'
import { connect } from 'react-redux'
import PostsComponent from '../components/Posts'

const mapStateToProps = (state) => {
  let posts = []
  if (state.PostsReducer.posts) {
    posts = state.PostsReducer.posts
  }
  return {
    posts: posts
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
