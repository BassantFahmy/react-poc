import React from 'react';
// import logo from '../assets/images/logo.jpg';
import location from '../assets/images/location1.webp';
const Contact = () => {
  return (
    <div className='t-container'>
      <h1 className='text-primary t-pt-m'>Reach us at</h1>
      <div className='t-pt-m'>
        <div> <p>Lorem Ipsum is simply dummy text of </p>
          <p>the printing and typesetting industry.</p></div>
        <div>
          <img src={location} className='t-pt-m img-100' />
        </div>
      </div>
    </div>
  )
}

export default Contact
