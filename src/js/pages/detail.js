import React from 'react'
import Header from '../containers/Header'
import Footer from '../containers/Footer'
import Article from '../containers/Article'

const Detail = () => (
  <div>
    <Header />
    <div>
      <div className={'container'}>
        <Article />
      </div>
    </div>
  </div>
)

export default Detail
