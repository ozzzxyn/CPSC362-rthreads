import React from 'react'
import './payment.css'
import { Link } from 'react-router-dom'

const Payment = ({cart, setCart}) => {
//Total price
const total = cart.reduce((price, item) => price + item.qty * item.price, 0)
const shipping = (total > 30) ? 0 : 20;
const tax = total * 0.0725;
const subtotal = (total + shipping + tax);


const clearcart = () =>
    {
        setCart(cart.filter(() =>
            {
                return false
            }))
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
                    <h4>Total: ${total.toFixed(2)}</h4>
                    <h4>Shipping: {(shipping === 0) ? "Free!" : "$" + shipping.toFixed(2)}</h4>
                    <h4>Taxes: ${tax.toFixed(2)}</h4>
                    <h4>Sub-Total: ${subtotal.toFixed(2)}</h4>
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