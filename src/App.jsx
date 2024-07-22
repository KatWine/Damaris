import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cart from './components/Cart/Cart'
import Network from './components/Network/Network'
import Review from './components/Review/ReviewForm';
import Reviews from './components/Review/ReviewList';
import SearchBar from './components/SearchBar/SearchBar';
import Catalog from './components/Catalog/Catalog'
import Home from './components/Home/Home'
import About from './components/About/About'
import './App.css'
const App = () => {
  

  return (
    
    <div className='damaris'>
      <SearchBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/review' element={<Review/>}/>
        <Route path='/reviews' element={<Reviews/>}/>
        <Route path='/catalog' element={<Catalog/>}/>  
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/about' element={<About/>}/>
      
      </Routes>
         <Network />
    </div>
    
  )
}

export default App