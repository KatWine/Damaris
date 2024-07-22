import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Network.css'; // Import the CSS file for styling

const Network = () => {
  return (
    <div className='network'>
      <ul className='network-list'>
        <li>
          <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faFacebook} /> Facebook
          </a>
        </li>
        <li>
          <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faInstagram} /> Instagram
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com' target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Network;
