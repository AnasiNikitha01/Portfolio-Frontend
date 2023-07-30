import React, { useState } from 'react';

export default function Education() {
const [disp,setdisp] = useState('none');
const [disp1,setdisp1] = useState('none');
const [disp2,setdisp2] = useState('none');

  var Style1 = {
      'display' : disp
  };
  var Style2 = {
    'display' : disp1
  };
  var Style3 = {
    'display' : disp2
  };

  function hover(n){
    if(n===1){
     setdisp('block');
    }
    if(n===2){
     setdisp1('block');
  }
     if(n===3){
     setdisp2('block');
  }
  }

    function leave(){
      setdisp('none');
      setdisp1('none');
      setdisp2('none');
    }

  return (
    <div className='Education'>
            <h2 className="headings">Education</h2>
      <div className='edu-row'>
        
        <div className="edu-col" onMouseEnter={()=>hover(1)} onMouseLeave={leave}>
        <button className="picture" onClick={()=>hover(1)}>
          <p className="icon"><i className="fa-solid fa-school"></i></p>
          <p className="title">Schooling</p>
        </button>

        <div className="edu-details" style={Style1}>
         <p className="school">St. Pius X High School, Hyderabad</p>        
        <ul>
           <li> <p className="course">Secondary School- X (2015 - 2016)</p> </li>
           <li><p>Completed with 8.3 GPA</p></li>
          
        </ul>
        </div>

        </div>

        <div className="edu-col" onMouseEnter={()=>hover(2)} onMouseLeave={leave}>
        <button className="picture" onClick={()=>hover(2)}>
          <p className="icon"><i className="fa-solid fa-tree-city"></i></p>
          <p className="title">Intermediate</p>
        </button>

        <div className="edu-details" style={Style2}>
         <p className="school">Narayana Junior College, Hyderabad</p>         
        <ul>
           <li> <p className="course">Intermediate (2016-2018)</p> </li>
           <li><p>Completed with 96%</p></li>
          
        </ul>
        </div>

        </div>

        <div className="edu-col" onMouseEnter={()=>hover(3)} onMouseLeave={leave}>
        <button className="picture"onClick={()=>hover(3)}>
          <p className="icon"><i className="fa-solid fa-graduation-cap"></i></p>
          <p className="title">Bachlore Degree</p>
        </button>

        <div className="edu-details" style={Style3}>
           <p className="school">GITAM University, Hyderabad</p>       
        <ul>
           <li> <p className="course">Bachelor of Technology (2018-2022)</p> </li>
           <li><p>Graduated with 8.92 GPA</p></li>
          
        </ul>
        </div>

        </div>

      </div>
    </div>
  )
}











