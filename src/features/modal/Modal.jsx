import React, { useState } from 'react'
import './modal.scss'
import ModalComponent from './ModalComponent';

const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className='modal-container'>
      <button 
        className='modal-btn'
        onClick={() => setIsModalOpen(true)} 
      >
        Open Modal
      </button>

      <ModalComponent isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>Glassmorphic Modal</h2>
        <p>This is a beautiful purple glassmorphic modal in React!</p>
      </ModalComponent>
    </div>
  )
}

export default Modal