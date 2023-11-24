import React from 'react'
import './ProjectList.css'
import Project from '../project/Project'
import {projects} from "../../data"

const ProjectList = () => {
  return (

    <div className='p1'>
        <div className="p1-texts">
            <h1 className='p1-title'> Create & Inspire. It's Shahmeer</h1>
            <p className="p1-desc">
              Discover a curated collection of cutting-edge web software projects, each a testament to creativity and technical excellence.
            </p>
        </div>
        <div className="p1-list">
              {projects.map((item)=>{
              return(
                <Project 
                key={item.id}
                img={item.img}
                link={item.link}  
                />);
              })}
       
        </div>
    </div>
  )
}

export default ProjectList