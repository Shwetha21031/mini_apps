import React, { useState } from 'react';
import AccordionItem from './AccordionItem';
import './accordion.scss';

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const data = [
    { title: 'Section 1', content: 'This is content for section 1.' },
    { title: 'Section 2', content: 'This is content for section 2.' },
    { title: 'Section 3', content: 'This is content for section 3.' },
  ];

  const handleClick = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="accordion-body">
      <div className="accordion-container">
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={index === openIndex}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  </div>
    
  );
};

export default Accordion;
