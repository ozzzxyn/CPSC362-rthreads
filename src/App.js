import React, { useState } from 'react'
import Nav from './comp/nav'
import {BrowserRouter} from 'react-router-dom'
import Rout from './comp/rout'
import Footer from './comp/footer'
import HomeProduct from './comp/home_product'

const App = () => {
  //Shop Page product\
  const [shop, setShop] = useState(HomeProduct)
  return (
    <>
    <BrowserRouter>
    <Nav />
    <Rout shop={shop}/>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App