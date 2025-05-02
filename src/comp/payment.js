import React from 'react'
import './payment.css'
import { Link } from 'react-router-dom'
import { FaWindowClose } from "react-icons/fa";




const Payment = ({cart, setCart}) => {
//Total price
const total = cart.reduce((price, item) => price + item.qty * item.price, 0)

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
                return false
            }))
        }
    }
const clearcart = () =>
    {
        cart.map((curElm) => {
            removeproduct(curElm)
        })
    }

  return (
    <>
    <div className='payment'>
        <div>
            <div className='container'>
                <div className='form'>
                    <h2>#Check Out</h2>
                    <form>
                        <div className='box'>
                            <div className='label'>
                                <h4>Full Name</h4>
                            </div>
                            <div className='input'>
                                <input type='text' placeholder='Enter Full Name' name='name'></input>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='label'>
                                <h4>E-Mail</h4>
                            </div>
                            <div className='input'>
                                <input type='email' placeholder='Enter E-Mail' name='email'></input>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='label'>
                                <h4>Address</h4>
                            </div>
                            <div className='input'>
                                <input type='text' placeholder='Enter valid Address' name='subject' ></input>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='label'>
                                <h4>Payment</h4>
                            </div>
                            <div className='input'>
                                <input type='password' placeholder='Enter Payment Method' name='Message'></input>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div className='bottom'>
            {
                <>
                <div className='Total'>
                    <h4>Sub Total: ${total}</h4>
                </div>
                <Link to='/thankyou'><button onClick={() => clearcart()}>Pay</button></Link>
                </>
            }
        </div>
    </div>
    </>
  )
}

export default Payment