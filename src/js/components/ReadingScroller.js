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
    console.log(this.props)
    window.addEventListener('scroll', (e) => {
      e.preventDefault()
      this.setState({ scrollY: window.pageYOffset});
    })
  }
  render() {
    return <div>{this.state.scrollY}</div>;
  }
}

export default ReadingScroller
