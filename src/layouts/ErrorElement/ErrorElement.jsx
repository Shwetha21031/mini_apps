import React from 'react'
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom'
import './errorelement.scss'

const ErrorElement = () => {
  const navigate = useNavigate()
  const handleNavigation = () => {
    navigate('/')
  }

  return (
    <div className="errorelement">
      <h1>Oops!</h1>
      <h3>Something went wrong</h3>
      <Button msg='Go to home page' handleFunction={handleNavigation} />
    </div>
  )
}

export default ErrorElement