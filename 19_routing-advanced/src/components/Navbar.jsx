import React from 'react'
import { Link } from "react-router-dom";
import Product from '../pages/Product';
import About from '../pages/About';
import Home from '../pages/Home';
import Contact from '../pages/Contact';


const Navbar = () => {
  return (
    <div className='text-white items-center flex px-4 py-8 bg-cyan-900 justify-between'>
      <h2 className='text-xl font-bold'>NotJustAkarsh</h2>
      <div className='text-white flex gap-10' >
        <Link className='text-lg font-medium' to='/'>Home</Link>
        <Link className='text-lg font-medium' to='/product'>Product</Link>
        <Link className='text-lg font-medium' to='/courses'>Courses</Link>
        <Link className='text-lg font-medium' to='/about'>About</Link>
        <Link className='text-lg font-medium' to='/contact'>Contact</Link>
      </div>
    </div>
  )
}

export default Navbar
