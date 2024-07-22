import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'

const Home = () => {
  const navigate = useNavigate()
  const [fadeInClass,setFadeInClass]=useState(['','','']);

  useEffect(() => {
    const timers = [];

    for (let i = 0; i < 3; i++) {
      timers.push(setTimeout(() => {
        setFadeInClass(prev => {
          const newClasses = [...prev];
          newClasses[i] = 'fade-in';
          return newClasses;
        });
      }, i * 500));  // Adjust the delay as needed
    }

    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, []);

  return (
    <div className='home-container'>
      <h1>Hello! What would you like to do today?</h1>
      <div className="home-button-container">
      <button className={`home-button ${fadeInClass[0]}`} onClick={() => navigate('/catalog')}>SHOP</button>
      <button className={`home-button ${fadeInClass[1]}`} onClick={() => navigate('/cart')}>View Cart</button>
      <button className={`home-button ${fadeInClass[2]}`} onClick={() => navigate('/reviews')}>Reviews</button>
      </div>
    </div>
  )
}

export default Home


