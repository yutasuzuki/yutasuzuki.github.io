import React from 'react'
import { Link } from 'react-router'
import Thumbnail from '../containers/Thumbnail'

const Header = () => {
  return (
    <header className={'header'}>
      <div className={'header__inner'}>
        <Link to='/'>
          <img className={'header__logo'} src='/src/img/logo.svg' />
        </Link>
        <div className={'header__thumbnail'}>
          <Thumbnail />
        </div>
      </div>
    </header>
  )
}

export default Header
