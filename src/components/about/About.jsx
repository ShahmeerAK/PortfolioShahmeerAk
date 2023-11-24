import React from 'react'
import './About.css'
import Aimg from "../../img/2.jpg"
const About = () => {
  return (
    <div className='a'>
     <div className="a-left">
         <div className="a-card bg"></div>
         <div className="a-card">
             <img src={Aimg} alt="" className='a-img' />
         </div>
     </div>
     <div className="a-right">
         <h1 className='a-title'>About Me</h1>
         <p className='a-desc'>
                  Motivated web developer, can create websites through React.js, Node.js (MERN). Strong collaboration skills. HTML, CSS and JavaScript. MySQL, MS Excel, MS Word.
                  I am working on new technologies as
                  well. I am very good at playing cricket and other physical sports,
                  so I am very fit, focused and consistent in my work and I can make
                  a difference with my knowledge in your Projects. Also I make 
              Design Mockups for Tshirts, Hoodies andother appearls. Here is my <b>TEEPUBLIC</b> proflie 
              <span color='rgb(78, 78, 197)'><a  href="https://www.teepublic.com/user/salaar-design-hub" >  Salar Design Hub</a></span>
         </p>
         
     </div>
    </div>

  )
}

export default About