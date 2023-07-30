import React from 'react';
import htmlc from '../Images/htmlc.png';
import Fronted from '../Images/Frontend.png';
import internship from '../Images/internship.png';
import lor from '../Images/lor.png';
import d1 from '../Images/html infosys certificate.pdf';
import d2 from '../Images/front end development.pdf';
import d3 from '../Images/Internship certificate.pdf';
import d4 from '../Images/LOR.pdf';

export default function Certifications() {

   

  return (
    <div className='Certifications'>
      <h2>Cerifications</h2>
         <div className="row">
             <div className="col-6">
              <button className="img-btn">
                <img className="img-fluid" src={htmlc} alt="img" />
              </button>
             </div>
             <div className="col-6" id='cols'>
                 I first started with the basic HTML course from an online sources and got a deep knowledge when done a certification course with Infosys. This course gave a deep understanding of HTML and many known tags and Styling ways with CSS , which helped me in creating simple static Projects.
              <a href={d1} target='_blank' rel="noreferrer" className='open_doc button-89'>View</a>
             </div>
         </div>

         <div className="row">
          <div className="col-6" id='cols'>
            While doing some static projects I have undergone many hurdels in creating pages, then I came across the Front-End certified Course by META in Coursera. It in-depth covered many topics which I was unaware at the time. This course got completed with explaining HTML, CSS and JavaScript with a good introduction to React JS.
            <a href={d2} target='_blank' rel="noreferrer" className='open_doc button-89'>View</a>
          </div>
          <div className="col-6">
            <button className="img-btn">
              <img className="img-fluid" src={Fronted} alt="img" />
            </button>
          </div>
         </div>

         <div className="row">
             <div className="col-6">
              <button className="img-btn">
                <img className="img-fluid" src={internship} alt="img" />
              </button>
             </div>
             <div className="col-6"  id='cols'>
                I have started the Internship in the month of Febraury 2023 and completed it in April 2023. This is a learning based Internship on the MERN Stack. Started when I gave an Entrance exam of the organization and cleared by standing in top 10. They gave deep overview of the Frontend and the Backend topics, gave many assignments for testing skills and ended with an assements and Interview.  
              <a href={d3} target='_blank' rel="noreferrer" className='open_doc button-89'>View</a>
             </div>
         </div>

         <div className="row">
          <div className="col-6" id='cols'>
            This is a Letter of Recommondation, I have recieved from the Innomatics Research Labs for the performance done during the Internship period. I am happy to share it as a first moment of success. The two months of Internship gave me a good experience of gaining skills and utilizing them for both Static and MERN Stack projects. 
            <a href={d4} target='_blank' rel="noreferrer" className='open_doc button-89'>View</a>
          </div>
          <div className="col-6">
            <button className="img-btn">
              <img className="img-fluid" src={lor} alt="img" />
            </button>
          </div>
         </div>
    </div>
  )
}
