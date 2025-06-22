import React from 'react'
import { router } from './Router'
import { RouterProvider } from 'react-router-dom'
import './App.scss'
const App = () => {
  return <RouterProvider router={router}/>
}

export default App