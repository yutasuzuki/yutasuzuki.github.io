import React from 'react'
import { connect } from 'react-redux'
import { readScroll } from '../actions'
import ReadingScrollerComponent from '../components/ReadingScroller'

const mapStateToProps = (state) => {
  console.log(state)
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    onReadingScroller: (y) => {
      dispatch(readScroll(y))
    }
  }
}

const ReadingScroller = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReadingScrollerComponent)

export default ReadingScroller
