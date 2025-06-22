import React from 'react';
import './home.scss';

const Home = () => {
  return (
    <div className="home-main">
    <div className="home-container">
      <div className="home-content">
        <h1 className="title">
          Welcome to <span className="highlight">MiniApp</span> 🚀
        </h1>
        <p className="subtitle">
          Every single component here was <span className="highlight">built from scratch</span> using <span className="highlight">pure React</span>! 💪
        </p>

        <p className="journey">
          I had an <span className="highlight2">absolute blast</span> learning & building:
        </p>

        <ul className="fun-list">
          <li>✨ Todo App</li>
          <li>✨ Modal with Glassmorphic design</li>
          <li>✨ Accordion with Smooth Animations</li>
          <li>✨ Clean Sidebar & Routing</li>
        </ul>

        <p className="closing">
          This is just the <span className="highlight">beginning</span> of my React journey. More fun to come! 🎉
        </p>
      </div>
      </div>
      </div>
  );
};

export default Home;
