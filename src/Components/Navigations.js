import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navigations() {

  const [clicked,Setclicked] = useState(null);
  
  function Styling(number){
    Setclicked(number);
  }
  var style_link1 = {
    background: clicked === 1 ? 'linear-gradient(45deg,rgba(128, 128, 128, 0.849),transparent)' : ' ',
    
  }
  var style_link2 = {
    background: clicked === 2 ? 'linear-gradient(45deg,rgba(128, 128, 128, 0.849),transparent)' : ' ',
    
  }
  var style_link3 = {
    background: clicked === 3 ? 'linear-gradient(45deg,rgba(128, 128, 128, 0.849),transparent)' : ' ',
    
  }
  var style_link4 = {
    background: clicked === 4 ? 'linear-gradient(45deg,rgba(128, 128, 128, 0.849),transparent)' : ' ',
    
  }
  var style_link5 = {
    background: clicked === 5 ? 'linear-gradient(45deg,rgba(128, 128, 128, 0.849),transparent)' : ' ',
    
  }
  var style_link6 = {
    background: clicked === 6 ? 'linear-gradient(45deg,rgba(128, 128, 128, 0.849),transparent)' : ' ',
    
  }
  var style_link7 = {
    background: clicked === 7 ? 'linear-gradient(45deg,rgba(128, 128, 128, 0.849),transparent)' : ' ',
    
  }


  return (
    <div className="Navigations">
       <ul className='Navigation-ul'>

       <Link to={'/'} onClick={()=>Styling(1)} style={style_link1}><li><i className="bi bi-person-circle"></i><span className="Tags">Profile</span></li></Link>

       <Link to={'/Skills'} onClick={()=>Styling(2)} style={style_link2}><li><i className="bi bi-tools"></i><span className="Tags">Skills</span></li></Link>

       <Link to={'/Projects'} onClick={()=>Styling(3)} style={style_link3}><li><i className="bi bi-layout-text-sidebar-reverse"></i><span className="Tags">Projects</span></li></Link>

       <Link to={'/Certifications'} onClick={()=>Styling(4)} style={style_link4}><li><i className="bi bi-award"></i><span className="Tags">Certifications</span></li></Link>

       <Link to={'/Resume'} onClick={()=>Styling(5)} style={style_link5}><li><i className="bi bi-file-earmark-person-fill"></i><span className="Tags">Resume</span></li></Link>

       <Link to={'/Services'} onClick={()=>Styling(7)} style={style_link7}><li><i className="bi bi-pc-display-horizontal"></i><span className="Tags">Services</span></li></Link>

       <Link to={'/Education'} onClick={()=>Styling(6)} style={style_link6}><li><i className="bi bi-mortarboard"></i><span className="Tags">Education</span></li></Link>
      
       </ul>
    </div>
  )
}
