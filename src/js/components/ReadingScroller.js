import React from 'react'

const ReadingScroller = (state) => {
  let scrollTop = 0
  window.addEventListener('scroll', function (e) {
    console.log(window.pageYOffset)
    scrollTop = window.pageYOffset
    
    // dispatchでreadScroll action呼ぶ
  })
  return (
    <section className={'js-target'}>
      <p>ReadingScroller: {scrollTop}</p>
    </section>
  )
}
export default ReadingScroller
