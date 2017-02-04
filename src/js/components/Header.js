import React from 'react'
import { Link } from 'react-router'
import Thumbnail from '../containers/Thumbnail'

const Header = () => {
  return (
    <header className={'header'}>
      <div className={'header-inner'}>
        <Link to='/'>
          <img className={'header-logo'} src='/src/img/logo.svg' />
        </Link>
        <div className={'layout-header-thumbnail'}>
          <Thumbnail />
        </div>
      </div>
    </header>
  )
}

export default Header
