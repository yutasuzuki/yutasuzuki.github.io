import React from 'react'
import { Link } from 'react-router'

const Thumbnail = (state) => {
  let modalStyle = 'balloon-thumbnail-container is-hide'
  if (state.isShow) {
    modalStyle = 'balloon-thumbnail-container is-show'
  }
  return (
    <div className={'relative'}>
      <div onClick={() => state.onClickModal()} className={'thumbnail-container'}>
        <img className={'thumbnail'} src='/src/img/thumbnail.jpg' />
      </div>
      <div className={modalStyle}>
        <div className={'balloon-thumbnail'}>
          <p>Yuta Suzuki</p>
          <p>
            <Link to={{ pathname: '/detail/1111', query: { id: 1111 } }}>detail</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Thumbnail
