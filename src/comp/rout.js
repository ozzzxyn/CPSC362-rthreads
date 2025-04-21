import React from 'react'
import {Routes, Route} from 'react-router';
import Home from './home';
import Shop from './shop';
import Cart from './cart';


const Rout = ({shop, Filter, allcatefilter, addtocart, cart}) => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/cart' element={<Cart cart={cart}/>} />
        <Route path='Shop' element={<Shop shop={shop} Filter={Filter} allcatefilter={allcatefilter} addtocart={addtocart}/>} />
    </Routes>
    </>
  )
}

export default Rout