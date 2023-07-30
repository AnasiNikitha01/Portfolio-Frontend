import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigations from './Components/Navigations';
import Navbar from './Components/Navbar';
import Profile from './Components/Profile';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Certifications from './Components/Certifications';
import Education from './Components/Education';
import Welcome from './Components/Welcome';
import Chat from './Components/Chat';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import Resume from './Components/Resume';
import Skills2 from './Components/Skills2';
import Skills3 from './Components/Skills3';
import Folder1 from './Components/Folder1';
import Folder2 from './Components/Folder2';
import Folder3 from './Components/Folder3';
import Services from './Components/Services';




function App() {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
 
  return (
    <div className="App">
       <div className="welcome_note">
        <Welcome/>
       </div>
         <div className="row">
          <div className="col-xl-3 col-lg-2 col-md-2 col-sm-12" id='col1'>
             <Navigations/>
          </div>
          <div className="col-xl-9 col-lg-10 col-md-10 col-sm-12" id='col2'>
      <Navbar/>
             <Routes>
              <Route path='/' element={<Profile/>} />
              <Route path='/Skills' element={<Skills/>} />
              <Route path='/Projects' element={<Projects/>} />
              <Route path='/Certifications' element={<Certifications/>}/>
              <Route path='/Education' element={<Education/>}/>
              <Route path='/Services' element={<Services/>}/>
              <Route path='/Resume' element={<Resume/>}/>
              <Route path='/Skills/1' element={<Skills2/>} />
              <Route path='/Skills/2' element={<Skills3/>} />
              <Route path='/Projects/Static' element={<Folder1/>}/>
              <Route path='/Projects/React' element={<Folder2/>} />
              <Route path='/Projects/Mern' element={<Folder3/>}/>
             </Routes>
          </div>
         </div>


     











         
         <div className='Chat-btn'>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
      <i className="bi bi-chat-dots"></i>
      </Button>
      <Popover  style={{background:'transparent', display : 'block'}}
       id={id}
       open={open}
       anchorEl={anchorEl}
       onClose={handleClose}
  anchorOrigin={{
    vertical: 'top',
    horizontal: 'right',
  }}
  transformOrigin={{
    vertical: 'bottom',
    horizontal: 'right',
  }}
>
        
          <div>
          <Chat/>
          </div>
      
      </Popover>
    </div>

    <div className="navigation-down">

      <Navigations/>
    </div>

       </div>
      
   
     

     
  );
}

export default App;
