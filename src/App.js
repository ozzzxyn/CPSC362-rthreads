import React, { useState } from 'react'
import Nav from './comp/nav'
import {BrowserRouter} from 'react-router-dom'
import Rout from './comp/rout'
import Footer from './comp/footer'
import HomeProduct from './comp/home_product'

const App = () => {
  //Shop Page product\
  const [shop, setShop] = useState(HomeProduct)
  //Shop category filter
  const Filter = (x) =>
  {
    const catefilter = HomeProduct.filter((product) =>
    {
      return product.cat === x
    })
    setShop(catefilter)
  }
  const allcatefilter = () =>
  {
    setShop(HomeProduct)
  }
  return (
    <>
    <BrowserRouter>
    <Nav />
    <Rout shop={shop} Filter={Filter} allcatefilter={allcatefilter}/>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App