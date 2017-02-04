import React from 'react'
import { connect } from 'react-redux'
import PostComponent from '../components/Post'
import { toggleModal, sortPosts } from '../actions'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch, hoge) => {
  return {
    onShowModal: () => {
      dispatch(toggleModal())
    },
    onLoadPost: () => {
      dispatch(sortPosts())
    }
  }
}

const Post = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostComponent)

export default Post
