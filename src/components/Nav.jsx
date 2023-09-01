import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='flex gap-4 font-black  text-black py-4 px-8 shadow-lg'>
        <Link to='/'><button className='hover:underline'>Home</button></Link>
        <Link to='/cart'><button className='hover:underline'>Cart</button></Link>
    </div>
  )
}

export default Nav