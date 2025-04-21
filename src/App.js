import React, { useState } from 'react'
import Nav from './comp/nav'
import {BrowserRouter} from 'react-router-dom'
import Rout from './comp/rout'
import Footer from './comp/footer'
import HomeProduct from './comp/home_product'

const App = () => {
  //Shop Page product\
  const [shop, setShop] = useState(HomeProduct)
  // Shop Search Filter
  const [search, setSearch] = useState('')
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
  // Shop Search Filter
  const searchlength = (search || []).length === 0
  const searchproduct = () =>
  {
  if(searchlength)
  {
    alert("Invalid search! Type Something!")
    setShop(HomeProduct)
  }
  else
  {
        const searchfilter = HomeProduct.filter((x) => 
        {
          return x.cat === search
        })
        setShop(searchfilter)
  }
}
  return (
    <>
    <BrowserRouter>
    <Nav search={search} setSearch={setSearch} searchproduct={searchproduct}/>
    <Rout shop={shop} Filter={Filter} allcatefilter={allcatefilter}/>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App