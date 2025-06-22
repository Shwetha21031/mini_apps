import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.scss';

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Todo app', path: '/todo' },
    { name: 'Modal', path: '/modal' },
    { name: 'Timer', path: '/timer' },
    { name: 'Accordion', path: '/accordion' },
  ];

  return (
    <div className="sidebar">
      <div className="logo"><span className="mini">mini</span> apps</div>
      <p>General</p>
      <ul>
        {menuItems.map((item, index) => (
          <li 
            key={index} 
            className={activeIndex === index ? 'active' : ''}
            onClick={() => setActiveIndex(index)}
          >
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
