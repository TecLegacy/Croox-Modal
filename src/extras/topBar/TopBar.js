import React from 'react';
import Module from './topBar.module.css';
const TopBar = () => {
  return (
    <>
      <div className={Module.top}>
        <header>
          <h1>Redux</h1>
        </header>
        <nav className={Module.nav}>
          <ul>
            <li>
              cart <span>4 </span>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default TopBar;
