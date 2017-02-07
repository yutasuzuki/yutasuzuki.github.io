import React from 'react'
import { readScroll } from '../actions'

const ReadingScroller = (state) => {
  let scrollTop = 0
  // window.addEventListener('scroll', function (e) {
  //   e.preventDefault()
  //   scrollTop = window.pageYOffset
  //   state.onReadingScroller(scrollTop)
  // })
  // window.addEventListener('resize', function (e) {
  //   e.preventDefault()
  //   console.log('resize')
  // })
  return (
    <section className={'js-target'}>
      <p>ReadingScroller: {state.scrollY}</p>
    </section>
  )
}
export default ReadingScroller
