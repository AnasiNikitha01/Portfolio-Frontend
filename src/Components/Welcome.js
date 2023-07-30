import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Welcome() {
  const [Cancle,SetCancle] = useState(false);

  function cancle(){
      SetCancle(!Cancle);
  }

  if(Cancle === true){
    var Style = {
        'display' : 'none'
    }
  }
  
  
  return (
    <div className='Welcome' style={Style}>
      <button className="cancle_icon" onClick={cancle}><i className="bi bi-x-lg"></i></button>
        <div className="welcome_letters">
          <p className='L1'>W</p>
          <p className='L2'>E</p>
          <p className='L3'>L</p>
          <p className='L4'>C</p>
          <p className='L5'>O</p>
          <p className='L6'>M</p>
          <p className='L7'>E</p>
        </div>
        <div className="matter">
        <p>I AM ANASI NIKITHA</p>
        <p>Visit this website in order to discover more about me and to get in touch with me regarding projects.</p>
        <Link onClick={cancle}>Click here to start</Link>
        </div>
    </div>
  )
}
