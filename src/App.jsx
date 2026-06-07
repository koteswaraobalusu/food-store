import React, { useEffect, useState } from 'react'
import { AllRoutes } from './routes/AllRoutes'
import { Footer, Header } from './components'
import { useDispatch, useSelector } from 'react-redux'
import { setError, setLoading, setLocationSuccess } from './app/userLocationSlice'

const App = () => {

  console.log(useSelector(state=>state))
  const dispatch=useDispatch()

  useEffect(
    ()=>{
      userLocation()
    },[]
  )

  const userLocation=()=>{
    dispatch(setLoading())
    navigator.geolocation.getCurrentPosition(
      async (position)=>{
        const {longitude,latitude}=position.coords;
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
        const data = await response.json();
        dispatch(setLocationSuccess(data))

      },
      (error)=>{
        dispatch(setError(error.message))
      }
    )



  }
  return (
    <div className='App'>
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  )
}

export default App