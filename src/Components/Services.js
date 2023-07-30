import React from 'react';
import up1 from '../Images/up1.jpg';
import up2 from '../Images/up2.jpeg';
import up3 from '../Images/up3.jpg';
import up4 from '../Images/up4.jpg';
import up5 from '../Images/up5.jpg';
import up6 from '../Images/up6.png';
import up7 from '../Images/up7.jpg';

export default function Services() {
  return (
    <div  className='Services'>
        <h2 className='headings'>Services</h2>
    <div className='Services1'>

        <div>
            <div className="upside">
                <img src={up1} alt="" />
            </div>
            <div className="downside">
                <h3>Building New Interfaces</h3>
                <p className="points">Provides you with a unique Web Interfaces matching your Business requirements or Personal Sites</p></div>
        </div>

        <div>
            <div className="upside">
                <img src={up2} alt="" />
            </div>
            <div className="downside">
                <h3>Website Maintainance</h3>
                <p className="points">Maintain the website resolving bugs, updating future content, improving architecture aspects without compromising in Responsiveness</p></div>
        </div>

        <div>
            <div className="upside">
                <img src={up3} alt="" />
            </div>
            <div className="downside">
                <h3>Creating Browser compatible designs</h3>
                <p className="points">Not all elements are compatible with all the browsers. Creating tools that improve site interaction regardless of the browser</p></div>
        </div>

        <div>
            <div className="upside">
                <img src={up4} alt="" />
            </div>
            <div className="downside">
                <h3>Working with API</h3>
                <p className="points">Can work with integrating API into the project and deploy it and creating new API for new data creation and display in a pleasent manner</p></div>
        </div>

        <div>
            <div className="upside">
                <img src={up5} alt="" />
            </div>
            <div className="downside">
                <h3>Creating Responsive Designs</h3>
                <p className="points">Maintaining Responsiveness for all screen resolutions without compromising on user interface.</p></div>
        </div>

        <div>
            <div className="upside">
                <img src={up6} alt="" />
            </div>
            <div className="downside">
                <h3>Database works</h3>
                <p className="points">Work with Database and Store your data in the Database like MongoDB, ensuring secure handling of the data</p></div>
        </div>

        <div>
            <div className="upside">
                <img src={up7} alt="" />
            </div>
            <div className="downside">
                <h3>Frontend and Backend Support</h3>
                <p className="points">
                    Good Backend is always important for a website to work and the data to fetch. Creating a backend which supports website interface and consume less data space and creating new API as well as Frontend components</p></div>
        </div>

    </div>
    </div>
  )
}
