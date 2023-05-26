import React from 'react'
import './Project.css'

function Project() {
  return (
    <li className="projectsLi" data-barba="HomeTransition">
      <div className="projectContainer">
        <a href="/work/studiomega/" data-info="2018" data-barba="HomeTransition">
          Studio
          <br />
          Mega
        </a>
      </div>
    </li>
  )
}

export default Project