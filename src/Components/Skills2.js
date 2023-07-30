import React from 'react'
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';
import bubbles1 from '../Images/bubbles1.gif';

export default function Skills2() {
  return (
    <div className='Skills2'>
        <Link to={'/Skills'} className='move'>
        <Tooltip title="Previous">
          <p>
        <i className="fa-solid fa-circle-chevron-left fa-beat">
        </i>
        </p>
        </Tooltip>
        </Link>


 
       <div className="skills2">
           <h2>Frameworks & Libraries</h2>
             <div className="round1">

                <div className="cover">
             <div className="round_div" style={{'height':'80%','width':'100%', 'background': `linear-gradient(90deg,rgba(250, 26, 64, 0.61),rgba(255, 192, 203, 0.555)),url(${bubbles1})`}}>
                React JS-80%
             </div>
             </div>
             <div className="cover">
             <div className="round_div" style={{ "height": "95%",'width':'100%','background': `linear-gradient(45deg,rgba(3, 131, 216, 0.61),rgba(192, 227, 255, 0.555)),url(${bubbles1})`}}>
                BootStrap-95%
             </div>
             </div>
             <div className="cover">
             <div className="round_div" style={{ "height": "85%",'width':'100%','background': `linear-gradient(45deg,rgba(255, 124, 1, 0.61),rgba(250, 209, 96, 0.555)),url(${bubbles1})`}}>
                Material UI-85%
             </div>
             </div>
        </div>
             <h2>Open Source Platform</h2>
        <div className="round2">

<div className="cover">
             <div className="round_div" style={{ "height": "75%",'width':'100%','background': `linear-gradient(45deg,rgba(255, 251, 1, 0.74),rgba(247, 250, 96, 0.555)),url(${bubbles1})`}}>
                Node JS-75%
             </div>
             </div>
       </div>
       </div>



        <Link to={'/Skills/2'} className='move'>
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
