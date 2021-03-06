import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return(
    <div className='navbar'>
      <header className='header'>
        <h1>Set Aside</h1>
        <p>Easily determine your self-employed taxes.</p>
      </header>
      <ul className='navlinks'>
        <li><a className='attribution' href="https://www.daveramsey.com/blog/file-taxes-for-freelance-work" target="_blank" rel="noopener noreferrer">Learn More</a></li>
        <li><a className='attribution' href="https://github.com/adriantoddross/set-aside" target="_blank" rel="noopener noreferrer">GitHub Repo</a></li>
      </ul>
    </div>
  )
}