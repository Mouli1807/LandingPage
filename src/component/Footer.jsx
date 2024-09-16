import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col gap-12 md:flex-row md:justify-between'>
      <ul className='flex font-lato text-gray-400 gap-6'>
        <li>
          <a href='#'>Facebook</a>
        </li>
        <li>
          <a href='#'>Instagram</a>
        </li>
        <li>
          <a href='#'>Twitter</a>
        </li>
      </ul>
      <div className='flex gap-1 '>
        <img src='./assets/Help-Avatar.svg' alt='help'></img>
        <p className='font-playfair font-thin'>Have any Question?</p>
        <a href="#" className='font-lato font-medium'>Talk to a Specialist</a>
      </div>
    </div>
  )
}

export default Footer;