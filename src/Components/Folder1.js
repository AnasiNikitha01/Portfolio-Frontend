import React from 'react';
import p1 from '../Images/p1.png'
import p2 from '../Images/p2.png'
import p3 from '../Images/p3.png'
import p4 from '../Images/p4.png'
import p5 from '../Images/p5.png'
import p6 from '../Images/p6.png'
import p7 from '../Images/p7.png'
import p8 from '../Images/p8.png'
import p9 from '../Images/p9.png'
import p10 from '../Images/p10.png'
import p11 from '../Images/p11.png'
import { Link } from 'react-router-dom';
import { Tooltip } from '@mui/material';

export default function Folder1() {
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
<h2>HTML, CSS and JavaScript Projects</h2>
</div>
    <div className='Folder'>
      

         <a target='_blank' rel="noreferrer" href="https://anasinikitha01.github.io/Homecare-Internatinal-replica/">
            <img src={p1} alt="" />
         </a>
         <a target='_blank' rel="noreferrer" href="https://anasinikitha01.github.io/Survey-Form1/">
            <img src={p2} alt="" />
         </a>
         <a target='_blank' rel="noreferrer" href="https://anasinikitha01.github.io/Wedding-Glams/">
            <img src={p3} alt="" />
         </a>
         <a target='_blank' rel="noreferrer" href="https://anasinikitha01.github.io/Skinsee/">
            <img src={p4} alt="" />
         </a>
         <a target='_blank' rel="noreferrer" href="https://anasinikitha01.github.io/Cards/">
            <img src={p5} alt="" />
         </a>
         <a target='_blank' rel="noreferrer" href="https://anasinikitha01.github.io/The-Hindu-e-Paper-clone/">
            <img src={p6} alt="" />
         </a>
         <a target='_blank' rel="noreferrer" href="https://anasinikitha01.github.io/NeonColors/">
            <img src={p7} alt="" />
         </a>
         <a target='_blank' rel="noreferrer" href="https://anasinikitha01.github.io/Sanchari/">
            <img src={p8} alt="" />
         </a>
         <a target='_blank' rel="noreferrer" href="https://anasinikitha01.github.io/store-API/">
            <img src={p9} alt="" />
         </a>
         <a target='_blank' rel="noreferrer" href="https://anasinikitha01.github.io/Fossil_landing-page-clone/">
            <img src={p10} alt="" />
         </a>
         <a target='_blank' rel="noreferrer" href="https://anasinikitha01.github.io/Portfolio-Using-HTML-CSS-JS/">
            <img src={p11} alt="" />
         </a>



         
    </div>
    </div>
  )
}
