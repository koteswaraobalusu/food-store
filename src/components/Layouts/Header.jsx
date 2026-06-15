import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/SWIGGY.NS.SVG';
import { useSelector } from 'react-redux';
export const Header = () => {
    const location=useSelector(state=>state.location)

  return (
    <header className='shadow-sm rounded-sm'>
        <nav className='bg-white p-5'>
            <div className='flex justify-between items-center'>

                <div className='flex items-center'>
                    <Link to='/' className='flex items-center'>
                        <img src={Logo}  className='h-10 w-10' alt='Swiggy logo'/>
                    </Link>

                        <span className='text-lg font-bold  underline hover:text-orange-500 ml-3'>Other</span>

                    {
                        location.loading && <span className='text-md font-bold ml-1 text-gray-700 hover:text-gray-400'>Fetching Location....</span>
                    }
                    {
                        location.error && <span className='text-md font-bold ml-1 text-gray-700 hover:text-gray-400'>{location.error}</span>
                    }
                    {
                        location.locationDetails && <span className='text-md font-bold ml-1 text-gray-700 hover:text-gray-400'>
                                {location.locationDetails.address?.neighbourhood || location.locationDetails.address?.suburb},
                                {location.locationDetails.address?.city},
                                {location.locationDetails.address?.state},
                                {location.locationDetails.address?.country},
                                {location.locationDetails.address?.postcode}
                            </span>
                    }
                    <span className='bi bi-chevron-compact-down text-xl font-black text-center ml-1 text-gray-700 hover:text-gray-400'></span>
                </div>
                
                
                
                <span className='bi bi-search text-lg font-semibold hover:text-orange-500 mt-1'><span className='ml-2'>Search</span></span>
                <span className='bi bi-person text-lg font-semibold hover:text-orange-500 mt-1'><span className='ml-2'>Sign In</span></span>
                <span className='bi bi-cart text-lg font-semibold hover:text-orange-500 mt-1'><span className='ml-2'>Cart</span></span>
                
            </div>
        </nav>
    </header>
  )
}
