import React from 'react'
import p21 from '../Images/p21.png';
import p22 from '../Images/p22.png';
import p23 from '../Images/p23.png';
import p24 from '../Images/p24.png';
import { Link } from 'react-router-dom';
import { Tooltip } from '@mui/material';

export default function Folder2() {
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
<h2>Projects using React JS</h2>
</div>
<div className='Folder'>
  

     <a target='_blank' rel="noreferrer" href="https://note-app-react-redux.netlify.app/">
        <img src={p24} alt="" />
     </a>
     <a target='_blank' rel="noreferrer" href="https://product-display-react.netlify.app/">
        <img src={p23} alt="" />
     </a>
     <a target='_blank' rel="noreferrer" href="https://covid-data-react-api.netlify.app/">
        <img src={p22} alt="" />
     </a>
     <a target='_blank' rel="noreferrer" href="https://fantastic-genie-de924d.netlify.app/">
        <img src={p21} alt="" />
     </a>
    



     
</div>
</div>
  )
}
