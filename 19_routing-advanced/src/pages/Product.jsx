import React from 'react'
import { Link, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div>
        <div className='bg-blue-400 justify-center flex py-4 gap-50 font-bold text-lg'> 
            <Link to='/product/men'>Men</Link>
            <Link to='/product/women'>Women</Link>
            <Link to='/product/kids'>Kids</Link>
        </div>
        <Outlet/>
    </div>
  )
}

export default Product
