import React from 'react'
import { connect } from 'react-redux'
import HeaderComponent from '../components/Header'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const Post = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderComponent)

export default HeaderComponent
