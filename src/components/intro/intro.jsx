import React from 'react'
import "./intro.css"
import Cvimg from "../../img/pic2.png"

const Intro = () => {
    return (
      <div className="i">
        <div className="i-left">
          <div className="i-left-wrapper">
            <h2 className="i-intro">Hello, My name is</h2>
            <h1 className="i-name">Shahmeer Khan</h1>
            <div className="i-title">
              <div className="i-title-wrapper">
                <div className="i-title-item">Photographer</div>
                <div className="i-title-item">Graphic Designer</div>
                <div className="i-title-item">Web Developer</div>
              </div>
            </div>
            <p className="i-desc">  </p>
          </div>
        </div>
        <div className="i-right">
          <div className="i-bg"></div>
          <img src={Cvimg} alt="" className="i-img" />
        </div>
      </div>
    );
}

export default Intro