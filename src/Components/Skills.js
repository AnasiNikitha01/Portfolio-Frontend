import React from 'react'
import Tooltip from '@mui/material/Tooltip';
import bubbles1 from '../Images/bubbles1.gif';
import { Link } from 'react-router-dom';

export default function Skills() {
  return (
    <div className='Skills'>
      {/* HTML5, CSS, Bootstrap, React JS, Node.js, ExpressJS, Material UI, JavaScript, MongoDB, Java, C */}
      <Link to={'/Skills/2'} className='move'>
                <Tooltip title="Previous">
                    <p>
                        <i className="fa-solid fa-circle-chevron-left fa-beat">
                        </i>
                    </p>
                </Tooltip>
            </Link>


      <div className="skill1">
        <h2>Programming Languages</h2>

        <div className='Progress-bars'>
          <div className='skill1-icons'>
            <Tooltip title="HTML">
            <i className="fa-brands fa-html5 "></i>
            </Tooltip>
            </div>
          <div className="progress">
            <div className="progress-bar" role="progressbar" aria-label="Success example" style={{ "width": "90%",'background': `linear-gradient(45deg,rgba(250, 26, 64, 0.61),rgba(255, 192, 203, 0.555)),url(${bubbles1})`,'animation': 'full 3s 1','animationDelay': '0s'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">HTML</div><span>90%</span>
          </div>
        </div>

        <div className='Progress-bars'>
          <div className='skill1-icons'>
            <Tooltip title="CSS">
            <i className="fa-brands fa-css3-alt "></i>
            </Tooltip>
            </div>
          <div className="progress">
            <div className="progress-bar" role="progressbar" aria-label="Info example" style={{ "width": "80%",'background': `linear-gradient(45deg,rgba(52, 255, 1, 0.74),rgba(145, 250, 96, 0.555)),url(${bubbles1})`,'animation': 'full 3s 1','animationDelay': '1s' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">CSS</div><span>80%</span>
          </div>
        </div>

        <div className='Progress-bars'>
        <div className='skill1-icons'>
          <Tooltip title="JavaScript">
          <i className="fa-brands fa-square-js "></i>
          </Tooltip>
          </div>
          <div className="progress">
            <div className="progress-bar" role="progressbar" aria-label="Warning example" style={{ "width": "70%",'background': `linear-gradient(45deg,rgba(255, 251, 1, 0.74),rgba(247, 250, 96, 0.555)),url(${bubbles1})`,'animation': 'full 3s 1','animationDelay': '2s' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">JavaScript</div><span>70%</span>
          </div>
        </div>

        <div className='Progress-bars'>
          <div className='skill1-icons'>
            <Tooltip title="JAVA">
            <i className="fa-brands fa-java "></i>
            </Tooltip>
            </div>
          <div className="progress">
            <div className="progress-bar" role="progressbar" aria-label="Danger example" style={{ "width": "85%",'background': `linear-gradient(45deg,rgba(255, 124, 1, 0.61),rgba(250, 209, 96, 0.555)),url(${bubbles1})`,'animation': 'full 3s 1','animationDelay': '1s' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">JAVA</div><span>85%</span>
          </div>
        </div>

        <div className='Progress-bars'>
          <div className='skill1-icons'>
            <Tooltip title="C Language">
            <i className="fa-solid fa-c "></i>
            </Tooltip>
            </div>
          <div 
          className="progress">
            <div className="progress-bar" role="progressbar" aria-label="Danger example" style={{ "width": "90%",'background': `linear-gradient(45deg,rgba(3, 131, 216, 0.61),rgba(192, 227, 255, 0.555)),url(${bubbles1})` ,'animation': 'full 3s 1','animationDelay': '0s'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">C</div><span>90%</span>
          </div>
        </div>

      </div>

       
      <Link to={'/Skills/1'} className='move'>
        <Tooltip title="Next">
          <p>
        <i className="fa-solid fa-circle-chevron-right fa-beat">
        </i>
        </p>
        </Tooltip>
        </Link>

    </div>
  )
}
