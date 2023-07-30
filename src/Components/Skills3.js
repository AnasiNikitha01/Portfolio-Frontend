import React from 'react'
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';
import bubbles1 from '../Images/bubbles.gif';

export default function Skills3() {
    return (
        <div className='Skills2'>

            <Link to={'/Skills/1'} className='move'>
                <Tooltip title="Previous">
                    <p>
                        <i className="fa-solid fa-circle-chevron-left fa-beat">
                        </i>
                    </p>
                </Tooltip>
            </Link>



            <div className="skills2">
                <h2>Back End Tools</h2>
                <div className="round1">

                <div className="cover">
                        <div className="round_div" style={{ "height": "75%", 'width': '100%', 'background': `linear-gradient(45deg,rgba(3, 131, 216, 0.61),rgba(192, 227, 255, 0.555)),url(${bubbles1})` }}>
                            Node JS-75%
                        </div>
                    </div>

                    <div className="cover">
                        <div className="round_div" style={{ 'height': '85%', 'width': '100%', 'background': `linear-gradient(90deg,rgba(250, 26, 64, 0.61),rgba(255, 192, 203, 0.555)),url(${bubbles1})` }}>
                            Express JS-85%
                        </div>
                    </div>
                    
                </div>
                <h2>Data Base</h2>
                <div className="round2">

                    <div className="cover">
                        <div className="round_div" style={{ "height": "75%", 'width': '100%', 'background': `linear-gradient(45deg,rgba(52, 255, 1, 0.74),rgba(145, 250, 96, 0.555)),url(${bubbles1})` }}>
                           MongoDB-75%
                        </div>
                    </div>
                </div>
            </div>



            <Link to={'/Skills'} className='move'>
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
