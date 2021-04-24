import React from 'react'
import './App.css'
import ProductsContainer from './components/Products/ProductsContainer'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Promoutions from './components/Promoutions/Promoutions'
import { Route } from 'react-router'
import UserCabinet from './components/UserCabinet/UserCabinet'

function App() {
  return (
    <div className='app-wrapper'>
      <div className='Header'>
        <Header />
      </div>
      <div className='Promoutions'>
        <Promoutions />
      </div>
      <div className='Navbar'>
        <Navbar />
      </div>
      <div className='Content'>
        <Route path='/products' render={() => <ProductsContainer />} />
        <Route path='/cabinet' render={() => <UserCabinet />} />
      </div>
    </div>
  );
}

export default App;
