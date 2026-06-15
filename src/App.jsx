import React, { useEffect, useState } from 'react'
import { AllRoutes } from './routes/AllRoutes'
import { Footer, Header } from './components'
import { useLocation } from './utils/useLocation'



const App = () => {
  useLocation()

  return (
    <div className='App'>
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  )
}

export default App