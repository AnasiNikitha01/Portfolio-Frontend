import React, { useState } from 'react'

export default function Chat() {
  const [Animate,SetAnimate] = useState();
  const [Display,SetDisplay] = useState();
  const [Name,SetName] = useState('');
  const [Email,SetEmail] = useState('');
  const [Contact,SetContact] = useState('');
  const [Message,SetMessage] = useState('');

  const [Style1,SetStyle1] = useState('flex');
  const [Style2,SetStyle2] = useState('none');
  const [Spinner,SetSpinner] = useState('none');

   var style1 = {
      display : Style1
   }

   var style2 = { 
    display : Style2
   }
  

 async function Send(event){
       event.preventDefault();
       SetAnimate('animate');
       SetDisplay('Display');

       
       console.log(Name,Message);

    const results = await fetch('https://portfolio-backend-n2s7.onrender.com/messages',{
          method : 'POST',
          headers:{
            'Content-Type' : 'application/json',
          },
          body:JSON.stringify({
            Name,
            Email,
            Contact,
            Message
          })
       })
      setTimeout(()=>{
               if(results.status != 201){
          SetSpinner('block')
       }
      },[2000]);
 
       if(results.status === 201){
           results.json().then(data=>{
              console.log(data);
              setTimeout(()=>{
                SetStyle1('none');
                SetStyle2('flex');
              },[2000])

            })
          }
           
  }

  return (
    <div className='Chat'>
      <div className="form" style={style1}>
        <h2>Leave a Message</h2>
         <form onSubmit={Send}>
            <input type="text" className='Name' placeholder='Your Name' value={Name} onChange={event=>SetName(event.target.value)} required/>

            <input type="email" className='Email' placeholder='Email' value={Email} onChange={event=>SetEmail(event.target.value)} required/>

            <input type="tel" className='Contact' placeholder='Contact Number' value={Contact} onChange={event=>SetContact(event.target.value)} required/>

            <textarea className='Message' placeholder='Leave your message here...' value={Message} onChange={event=>SetMessage(event.target.value)} required></textarea>

            <button className='send-btn button-89'><span className={Display}>Send</span><i className="fa-solid fa-truck-arrow-right" id={Animate}></i>
            <div className="spinner-border text-secondary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
</button>
         </form>
         </div>

         <div style={style2} className='sent'>
          <p className='Main_sent'>
          Message Recieved <i className="fa-sharp fa-regular fa-circle-check fa-beat"></i></p>

          <p className='reply'>I will get back to you soon!!</p>
         </div>
    </div>
  )
}
