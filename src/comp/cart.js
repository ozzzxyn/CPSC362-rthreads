import React from 'react'
import './cart.css'
import { Link } from 'react-router-dom'

const Cart = ({cart}) => {
  return (
    <>
    <div className='cart'>
        <h3>#cart</h3>
        {
            cart.length === 0 &&
            <>
            <div className='empty_cart'>
                <h2>Your Cart is Empty</h2>
                <Link to='/shop'><button>Shop Now</button></Link>
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
                                <img src={curElm.image} alt=''></img>
                            </div>
                            <div className='detail'>
                                <h4>{curElm.cat}</h4>
                                <h3>{curElm.Name}</h3>
                                <p>Price: ${curElm.price}</p>
                                <div className='quantity'>
                                    <button>+</button>
                                    <input type='number' value={curElm.qty}></input>
                                    <button>-</button>
                                </div>
                                <p>Total: ${curElm.price * curElm.qty}</p>
                            </div>
                        </div>
                        </>
                    )
                })
            }
        </div>
    </div>
    </>
  )
}

export default Cart