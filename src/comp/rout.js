import React from 'react'
import {Routes, Route} from 'react-router';
import Home from './home';
import Shop from './shop';
import Cart from './cart';
import Contact from './contact';
import About from './about';
import Payment from './payment';
import ThankYou from './thankyou';

const Rout = ({shop, Filter, allcatefilter, addtocart, cart, setCart}) => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home addtocart={addtocart}/>}/>
        <Route path='/collection' element={<Cart cart={cart} setCart={setCart}/>} />
        <Route path='Shop' element={<Shop shop={shop} Filter={Filter} allcatefilter={allcatefilter} addtocart={addtocart}/>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/payment' element={<Payment cart={cart} setCart={setCart}/>} />
        <Route path='/about' element={<About />} />
        <Route path='/thankyou' element={<ThankYou cart={cart} setCart={setCart}/>} />
    </Routes>
    </>
  )
}

export default Rout