import React from 'react'
import './cart.css'
import { Link, useNavigate } from 'react-router-dom'
import { FaWindowClose } from "react-icons/fa";




const Cart = ({cart, setCart}) => {

    const navigate = useNavigate();
  
    const handleNavigation = (path, scrollPosition = 0) => {
        navigate(path);
        window.scrollTo({
        top: scrollPosition,
        left: 0,
        behavior: 'smooth'
        });
    };





    
    // Increase quanity of cart product
    const incqty = (product) =>
    {
        const exist = cart.find((x) => 
        {
            return x.id === product.id
        })
        setCart(cart.map((curElm) => 
        {
            return curElm.id === product.id ? {...exist, qty: exist.qty + 1 }: curElm
        }))
    }
    // Decrease quanity of cart product
    const decqty = (product) =>
        {
            const exist = cart.find((x) => 
            {
                return x.id === product.id
            })
            setCart(cart.map((curElm) => 
            {
                return curElm.id === product.id ? {...exist, qty: Math.max(exist.qty - 1, 1) }: curElm
            }))
        }

//removing cart product
const removeproduct = (product) =>
{
    const exist = cart.find((x) =>
    {
        return x.id === product.id
    })
    if(exist.qty > 0)
    {
        setCart(cart.filter((curElm) =>
        {
            return curElm.id !== product.id
        }))
    }
}
//Total price
const total = cart.reduce((price, item) => price + item.qty * item.price, 0)

  return (
    <>
    <div className='cart'>
        <h3>#cart</h3>
        {
            cart.length === 0 &&
            <>
            <div className='empty_cart'>
                <h2>Your Cart is Empty</h2>
                <a 
                                  href='/about' 
                                  className='link'
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handleNavigation('/shop', 320); // Scroll to 300px from top
                                  }}
                                  data-scroll-position="300"
                                >
                                    <button>Shop Now</button>
                                </a>
                
            </div>
            </>
        }
        <div className='container'>
            {
                cart.map((curElm) =>
                {
                    return(
                        <>
                        <div className='box'>
                            <div className='img_box'>
                                <img src={`http://localhost:5000/image/${curElm.image}.webp`} alt=''></img>
                            </div>
                            <div className='detail'>
                                <div className='info'>
                                <h4>{curElm.cat}</h4>
                                <h3>{curElm.Name}</h3>
                                <p>Price: ${curElm.price}</p>
                                <p>Total: ${ (curElm.price * curElm.qty).toFixed(2) }</p>

                                </div>
                                <div className='quantity'>
                                    <button onClick={() => incqty (curElm)}>+</button>
                                    <input type='number' value={curElm.qty}></input>
                                    <button onClick={() => decqty (curElm)}>-</button>
                                </div>
                                <div className='icon'>
                                    <li onClick={() => removeproduct(curElm)}><FaWindowClose /></li>
                                </div>
                            </div>
                        </div>
                        </>
                    )
                })
            }
        </div>
        <div className='bottom'>
            {
                cart.length > 0 &&
                <>
                <div className='Total'>
                    <h4>Sub Total: ${ total.toFixed(2) }</h4>

                </div>
                <Link to='/payment'><button>Checkout</button></Link>
                </>
            }
        </div>
    </div>
    </>
  )
}

export default Cart