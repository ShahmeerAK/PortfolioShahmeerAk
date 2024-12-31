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
                  I am a passionate creative professional specializing in photography, graphic design, 
                  and web development, seamlessly blending artistry and 
                  technology to craft visually stunning and functional experiences. 
                  Here are my profile links<br></br>
                   <b>Shutterstock:</b> 
              <span color='rgb(78, 78, 197)'><a  href="https://www.shutterstock.com/g/EnigmaEasel" >  
              EnigmaEasel</a></span><br></br>
              
              <b>Pond5:</b> 
              <span color='rgb(78, 78, 197)'><a  href="https://www.pond5.com/artist/shahmeer50256" >  
              EnigmaEasel</a></span><br></br>
              
              <b>Teepublic:</b> 
              <span color='rgb(78, 78, 197)'><a  href="https://www.teepublic.com/user/salaar-design-hub" >  
              Salar Design Hub</a></span><br></br>
         </p>
         
     </div>
    </div>

  )
}

export default About