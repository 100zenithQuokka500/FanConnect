import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='bg-purple-900  text-white flex justify-center items-center p-4'>
      <p className='text-center'>Copyright &copy; {currentYear} FanConnect - Where Passion Meets Community !</p>
    </footer>
  )
}

export default Footer
