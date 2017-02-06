import React from 'react'
import Header from '../containers/Header'
import Footer from '../containers/Footer'
import Article from '../containers/Article'
import ReadingScroller from '../containers/ReadingScroller'

const Detail = () => (
  <div>
    <Header />
    <ReadingScroller />
    <div>
      <div className={'container'}>
        <Article />
      </div>
    </div>
  </div>
)

export default Detail
