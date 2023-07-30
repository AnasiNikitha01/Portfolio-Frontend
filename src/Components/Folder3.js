import React from 'react'
import p31 from '../Images/p31.png';
import p32 from '../Images/p32.png';
import { Link } from 'react-router-dom';
import { Tooltip } from '@mui/material';

export default function Folder3() {
  return (
    <div className='Folder123'>
    <div className='link-title'>
  <Link to={'/Projects'} className='move move1'>
    <Tooltip title="Back">
      <p>
    <i className="fa-solid fa-circle-chevron-left fa-beat">
    </i>
    </p>
    </Tooltip>
    </Link>
<h2>MERN Stack Projects</h2>
</div>
<div className='Folder'>
  

     <a target='_blank' rel="noreferrer" href="https://pure-radiance-frontend.vercel.app/">
        <img src={p32} alt="" />
     </a>
     <a target='_blank' rel="noreferrer" href="https://starlit-palmier-b4414e.netlify.app/">
        <img src={p31} alt="" />
     </a>

    

     
</div>
</div>
  )
}
