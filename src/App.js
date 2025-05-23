import React, { useState } from 'react'
import Nav from './comp/nav'
import {BrowserRouter} from 'react-router-dom'
import Rout from './comp/rout'
import Footer from './comp/footer'
import HomeProduct from './comp/home_product'

const App = () => {
  //Add to cart
  const [cart, setCart] = useState([])
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
          return x.cat.includes(search) || x.Name.includes(search)
        })
        setShop(searchfilter)
  }
}
// Add to Cart
const addtocart = (product) =>
{
  const exist = cart.find((x) => {
    return x.id === product.id
  })
  if(exist)
  {
    alert("This product is already in your cart!")
  }
  else
  {
    setCart([...cart, {...product, qty:1}])
  }
}
  return (
    <>
    <BrowserRouter>
    <Nav search={search} setSearch={setSearch} searchproduct={searchproduct}/>
    <Rout setCart={setCart} cart={cart} shop={shop} Filter={Filter} allcatefilter={allcatefilter} addtocart={addtocart}/>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App