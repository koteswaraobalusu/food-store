import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/SWIGGY.NS.SVG';
export const Header = () => {
  return (
    <header className='shadow-sm rounded-sm'>
        <nav className='bg-white p-5'>
            <div className='flex justify-between items-center'>
                <Link to='/' className='flex items-center'>
                    <img src={Logo}  className='h-10 w-10' alt='Swiggy logo'/>
                    <span className='text-2xl font-bold ml-3 text-orange-500 '>Swiggy</span>
                </Link>
                
                <span className='bi bi-search text-lg font-semibold hover:text-orange-500 mt-1'><span className='ml-2'>Search</span></span>
                <span className='bi bi-person text-lg font-semibold hover:text-orange-500 mt-1'><span className='ml-2'>Sign In</span></span>
                <span className='bi bi-cart text-lg font-semibold hover:text-orange-500 mt-1'><span className='ml-2'>Cart</span></span>
                
            </div>
        </nav>
    </header>
  )
}
