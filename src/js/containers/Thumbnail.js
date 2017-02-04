import React from 'react'
import { connect } from 'react-redux'
import { toggleModal } from '../actions'
import ThumbnailComponent from '../components/Thumbnail'

const mapStateToProps = (state) => {
  let bool = false
  if (state.ModalReducer.isShow) {
    bool = true
  }
  return {
    isShow: bool
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickModal: () => {
      dispatch(toggleModal())
    }
  }
}

const Thumbnail = connect(
  mapStateToProps,
  mapDispatchToProps
)(ThumbnailComponent)

export default Thumbnail
