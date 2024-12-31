import React from 'react'
import './ProjectList.css'
import Project from '../project/Project'
import {projects} from "../../data"
import Img1 from './new123/l1.png'
import Img2 from './new123/l2.png'
import Img3 from './new123/l3.png'
import Img4 from './new123/l4.png'
import Img5 from './new123/l5.png'
import Img7 from './new123/l6.png'
import ai from './new123/i1.jpg'
import ai2 from './new123/i2.jpg'
import ai3 from './new123/i3.jpg'
import ai4 from './new123/i4.jpg'
import ai5 from './new123/i5.jpg'
import ai7 from './new123/i6.jpg'
import { Button, Card } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';

const ProjectList = () => {
   const myStyle = {
    color: 'blue', // Change this to your desired color
  };
  return (

    <div className='p1'>
        <div className="p1-texts">
            <h1 className='p1-title'> What I Create And Sell</h1>
            
   <div className="carousel-container">
      <div className="carousel-section">
        <h2>1. Photos</h2>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 fixed-image"
              src={ai3}
              alt="Photo no 1"
            />
            </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 fixed-image"
              src={ai4}
              alt="Photo no 2"
            />
            
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 fixed-image"
              src={ai5}
              alt="Photo no 3"
            />
                      </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 fixed-image"
              src={ai}
              alt="Photo no 4"
            />
            
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 fixed-image"
              src={ai2}
              alt="Photo no 5"
            />
            
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 fixed-image"
              src={ai7}
              alt="Photo no 6"
            />

          </Carousel.Item>
        </Carousel>
      </div>

      <div className="carousel-section">
        <h2>2. Illustrations</h2>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 fixed-image"
              src={Img1}
              alt="Illsutration no. 1"
            />
                      </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 fixed-image"
              src={Img2}
              alt="Illsutration no. 2"
            />
            
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 fixed-image"
              src={Img7}
              alt="Illsutration no. 3"
            />
            
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 fixed-image"
              src={Img3}
              alt="Illsutration no. 4"
            />
            
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 fixed-image"
              src={Img5}
              alt="Illsutration no. 5"
            />
            
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 fixed-image"
              src={Img4}
              alt="Illsutration no. 6"
            />
            
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
            <p className="p1-desc">
             <h2>3. WEB TEMPLATES</h2>          </p>
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