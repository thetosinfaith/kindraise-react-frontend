import React from 'react'
import './loading.css'
import Icon from '../../assets/Icon.svg'

const Loading = () => {
  return (
    <div className='loadingBody'>
      <div className="loadingWrapper">
        <img src={Icon} alt="" />
        <div>
          Loading dashboard...
        </div>
      </div>
    </div>
  )
}

export default Loading