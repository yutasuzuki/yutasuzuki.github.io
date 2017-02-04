import React from 'react'
import Header from '../containers/Header'
import Footer from '../containers/Footer'
import Posts from '../containers/Posts'

const App = () => (
  <div>
    <Header />
    <div className={'content'}>
      <div className={'container'}>
        <div className={'main'}>
          <Posts />
        </div>
        <aside className={'aside'}>
          aside
        </aside>
      </div>
    </div>
  </div>
)

export default App
