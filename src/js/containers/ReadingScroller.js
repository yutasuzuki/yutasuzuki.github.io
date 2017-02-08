import React from 'react'
import { connect } from 'react-redux'
import { readScroll } from '../actions'
import ReadingScrollerComponent from '../components/ReadingScroller'

const mapStateToProps = (state) => {
  if (state.ReadingScrollReducer.scrollY) {
    let scrollY = state.ReadingScrollReducer.scrollY
  } else {
    let scrollY = 0
  }
  return {
    scrollY: scrollY
  }
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
