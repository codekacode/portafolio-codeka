import React from 'react'
import Main from '../Main/Main'
import './WraperPage.css'

function WraperPage() {
  return (
    <div className="wrapper-page">
      <div className="wraper-container">
        <div className="stagePerspective parallaxPerspective perspective-origin-tt-bb">
          <div className="stageContainer">
            <Main />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WraperPage