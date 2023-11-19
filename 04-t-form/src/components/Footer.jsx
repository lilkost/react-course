import React from 'react'

const Footer = ({lenght}) => {
  const year = new Date();
  console.log(lenght)
  return (
    <footer className='footer'>
        footer
        <p className='year'>
          {year.getFullYear()}
        </p>
        <p className='total-count'>
          length: 
          {lenght} 
          {lenght > 1 ? 'items' : 'item'}
        </p>
    </footer>
  )
}

export default Footer