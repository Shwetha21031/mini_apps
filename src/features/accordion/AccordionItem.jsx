import React from 'react';
import { IoIosArrowDown } from "react-icons/io";

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
      <div className="accordion-header" onClick={onClick}>
        <h3>{title}</h3>
        <span className={`arrow ${isOpen ? 'rotate' : ''}`}><IoIosArrowDown /></span>
      </div>
      <div className="accordion-content">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default AccordionItem;
