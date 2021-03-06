import React from 'react';
import './Footer.css';

export default function Footer(props) {
  return (
    <div className='footer-container'>
      <footer id='footer' className='footer' role='contentinfo'>
          {/* <img className='footer-img' src="https://res.cloudinary.com/adriantoddross/image/upload/v1527785141/adrian-ross.png" alt="Adrian Ross"/> */}
        <p>
          Designed and developed by <a className='attribution' href="https://www.adriantoddross.com" target="_blank" rel="noopener noreferrer">Adrian Ross</a>, inspired by <a className='attribution' href="https://www.daveramsey.com/" target="_blank" rel="noopener noreferrer">Dave Ramsey</a>. Hosted on Netlify.
        </p>
        <p>Code is licensed under MIT and available on Github. All images and graphics are licensed under CC BY-SA. © 2019 Adrian Ross</p>
      </footer>
    </div>
  );
}