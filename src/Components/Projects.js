import React from 'react'
import folderimg from '../Images/folder.png';
import {Link} from 'react-router-dom';

export default function Projects() {
  return (
    <div className="Projects">
      <h2 className="headings">Projects</h2>
    <div className="Project">
      
          <Link to={'/Projects/Static'} className="folder">
         <img src={folderimg} alt="" />
          <p>Projects using HTML, CSS and JavaScript</p>
          </Link>
          
          <Link className="folder" to={'/Projects/React'}>
          <img src={folderimg} alt="" />
          <p>Projects using React JS</p>
          </Link>

          <Link to={'/Projects/Mern'} className="folder">
          <img src={folderimg} alt="" />
          <p>MERN Stack Projects</p>
          </Link>        

    </div>
    </div>
  )
}
