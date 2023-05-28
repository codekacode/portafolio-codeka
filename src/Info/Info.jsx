import React from "react";
import './Info.scss';

const Info = () => {
  return (
    <div className="info">
      <div className="info-left">
        <div className="contact">
          <ul>
            <li>Karem Quiroz</li>
            <li>Web Developer</li>
          </ul>
          <ul>
            <li>Tacna Peru</li>
            <li class="email">
              <a href="mailto:karem.quiroz.m@gmail.com">
                <strong>karem.quiroz.m@gmail.com</strong>
              </a>
            </li>
          </ul>
        </div>
        <nav className="links">
          <ul>
            <li class="about-li">
              <button class="link" aria-label="About">
                <span>01</span> <strong>about</strong>
              </button>
            </li>
            <li class="journal-li">
              <a href="/journal/">
                <span>02</span> <strong>journal</strong>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="info-right">
        <div className="social">
          <ul>
            <li>
              <a class="no-barba" href="https://twitter.com/Codekacode/" target="_blank" rel="noopener">
                <span>03</span> <strong>twitter</strong>
              </a>
            </li>
            <li>
              <a class="no-barba" href="https://www.instagram.com/codekacode/" target="_blank" rel="noopener">
                <span>04</span> <strong>instagram</strong>
              </a>
            </li>
            <li>
              <a class="no-barba" href="https://www.linkedin.com/in/karem-quiroz/" target="_blank" rel="noopener">
                <span>05</span> <strong>linkedin</strong>
              </a>
            </li>
          </ul>
        </div>
        {/* <div className="credits"></div> */}
        <div className="color-mode">
          <div className="dot"></div>
          <button className="night-mode" aria-labe="Night Colot Mode"></button>
          <button className="light-mode" aria-labe="Light Colot Mode"></button>
          <button className="ultra-mode" aria-labe="Ultra Colot Mode"></button>
          <div className="circle"></div>
        </div>
      </div>
      <div className="copyright">Copyright © 2023 Codeka Code Co. All rights reserved.</div>
    </div>
  )
}

export default Info
