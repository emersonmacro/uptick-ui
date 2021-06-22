import React from 'react'

import './Spacer.css'

const Spacer = ({ includeTopMargin = false }) => {
  const containerClasses = includeTopMargin ? 'spacer-container with-top-margin' : 'spacer-container'
  return (
    <div className={ containerClasses }>
      <div className="spacer-inner"></div>
    </div>
  )
}

export default Spacer
