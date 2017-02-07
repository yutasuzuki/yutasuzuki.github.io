import React from 'react'
import { connect } from 'react-redux'
import { readScroll } from '../actions'
import ReadingScrollerComponent from '../components/ReadingScroller'

const mapStateToProps = (state) => {
  console.log('state:ReadingScroller', state)
  if (state.ReadingScrollReducer.scrollY) {
    let scrollY = state.ReadingScrollReducer.scrollY
  } else {
    let scrollY = 0
  }
  console.log('state', state)
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
