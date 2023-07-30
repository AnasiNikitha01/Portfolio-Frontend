import React from 'react'
import MyPic from '../Images/MyPicture.png'
import { Link } from 'react-router-dom'
import Tooltip from '@mui/material/Tooltip';


export default function Profile() {
  return (
    <div className='Profile'>
      <div className="row">
        <div className="col-6" id='myimg'>
        <img src={MyPic} className="img-fluid mypic" alt="..."></img>
        </div>
        <div className="col-6" id='Info'>
          <div>Hey there !</div>
           
           <div><span>I am </span><span className="Name_title">Anasi Nikitha</span></div>

           <div>A WEB DEVELOPER</div>

           <div className="about">Greetings and thanks for visiting my website. Take a look around the site and get in touch with me anytime you want me to work on your projects. 
          </div>

          <div className="social_link">
           <Tooltip title="GitHub">
            <Link to={'https://github.com/AnasiNikitha01'} target='_blank'><i className="bi bi-github"></i></Link>
            </Tooltip>

            <Tooltip title="LinkedIn">
            <Link to={'https://www.linkedin.com/in/anasi-nikitha-3a37711a7/'} target='_blank'><i className="bi bi-linkedin"></i></Link>
            </Tooltip>

            <Tooltip title="Resume">
            <Link to={'/Resume'}><i className="fa-regular fa-file"></i></Link>
            </Tooltip>

            <Tooltip title="Projects">
            <Link to={'/Projects'}><i className="fa-solid fa-globe"></i></Link>
            </Tooltip>
          </div>
        </div>
      </div>

      <div className="row">
          
      </div>
    </div>
  )
}
