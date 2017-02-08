import React, { Component } from 'react'
import { readScroll } from '../actions'

// const ReadingScroller = (state) => {
//   let scrollTop = 0
//   console.log(this)
//   window.addEventListener('scroll', function (e) {
//     e.preventDefault()
//     scrollTop = window.pageYOffset
//     state.onReadingScroller(scrollTop)
//   })
//   window.addEventListener('resize', function (e) {
//     e.preventDefault()
//     console.log('resize')
//   })
//   return (
//     <section className={'js-target'}>
//       <p>ReadingScroller: {state.scrollY}</p>
//     </section>
//   )
// }
// export default ReadingScroller

class ReadingScroller extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scrollY: this.props.scrollY
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      this.getRatioScroll()
    })
    window.addEventListener('resize', () => {
      this.getRatioScroll()
    })
    this.getRatioScroll()
  }

  getRatioScroll() {
    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight
    const bodyHeight = document.body.clientHeight
    const scrollY = window.scrollY / ( bodyHeight - windowHeight ) * 100
    this.setState({ scrollY: scrollY })
  }

  render(){
    const constainer = {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      width: `${this.state.scrollY}%`,
      height: '2px',
      backgroundColor: '#00a0e8',
      WebkitTransition: '.1s ease',
      transition: '.1s ease',
      zIndex: 999,
      opacity: .9,
    }
    return (
      <div style={constainer}></div>
    )
  }
}

export default ReadingScroller
