import React from 'react'
import MyResume from '../Images/MyResume.pdf'
import resume from '../Images/resume.png';

export default function Resume() {
  return (
    <div className='Resume'>
         
      <h2 className="headings">Resume</h2>

      <a href={MyResume} target='_blank' rel="noreferrer" className="res-img">
        <img src={resume} alt="" />
      </a>
        
      <a href={MyResume} target='_blank' rel="noreferrer" className='btn-white button-89'>View</a>

    </div>
  )
}
