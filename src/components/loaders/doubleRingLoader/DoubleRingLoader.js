import React from 'react';
import './DoubleRingLoader.scss';

const DoubleRingLoader = () => {
  return (
    <div className="loader">
      <div className="face face1">
        <div className="circle"></div>
      </div>
      <div className="face face2">
        <div className="circle"></div>
      </div>
    </div>
  )
}

export default DoubleRingLoader
