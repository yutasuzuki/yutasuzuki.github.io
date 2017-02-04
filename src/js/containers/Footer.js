import React from 'react'
import { connect } from 'react-redux'
import FooterComponent from '../components/Footer'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const Footer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FooterComponent)

export default Footer
