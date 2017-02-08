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
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.setState({ scrollY: window.pageYOffset * ( w / h )  });
  }

  render(){
    return (
      <div className={'ReadingScroller'}>
        <div className={'ReadingScroller'}>
          <div className={'ReadingScroller'}>
            {this.state.scrollY}
          </div>
        </div>
      </div>
    )
  }
}

export default ReadingScroller
