import React, { Component } from 'react'

class ReadingScroller extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scrollY: this.props.scrollY
    }
    this.event = {
      readingScrollHandler: () => {
        this.getRatioScroll()
      }
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.event.readingScrollHandler)
    window.addEventListener('resize', this.event.readingScrollHandler)
    this.getRatioScroll()
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.event.readingScrollHandler)
    window.removeEventListener('resize', this.event.readingScrollHandler)
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
