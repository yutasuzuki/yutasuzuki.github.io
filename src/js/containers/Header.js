import React from 'react'
import { connect } from 'react-redux'
import HeaderComponent from '../components/Header'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const Header = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderComponent)

export default Header
