import React from 'react'
import './footer.css'
import { FaPiggyBank } from "react-icons/fa6";
import { FaShippingFast } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";
import { GiWallet } from "react-icons/gi";


const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='container'>
            <div className='left-box'>
                <div className='box'>
                    <div className='icon_box'>
                        <FaPiggyBank />
                    </div>
                    <div className='detail'>
                        <h3>Great Savings</h3>
                        <p>Lorem ipsum</p>
                    </div>
                </div>
                    <div className='box'>
                    <div className='icon_box'>
                        <FaShippingFast />
                    </div>
                    <div className='detail'>
                        <h3>Free Delivery</h3>
                        <p>Lorem ipsum</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='icon_box'>
                        <MdOutlineSupportAgent />
                    </div>
                    <div className='detail'>
                        <h3>24/7 Support</h3>
                        <p>Lorem ipsum</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='icon_box'>
                        <GiWallet />
                    </div>
                    <div className='detail'>
                        <h3>Money Back Guaranteed!</h3>
                        <p>Lorem ipsum</p>
                    </div>
                </div>
            </div>
            <div className='right_box'>
                <div className='header'>
                    <img src='image/logo2.png' alt=''></img>
                    <p>Lorem ipsum</p>
                </div>
                <div className='bottom'>
                    <div className='box'>
                        <h3>Your Account</h3>
                        <ul>
                            <li>About Us</li>
                            <li>Account</li>
                            <li>Payment</li>
                            <li>Sales</li>
                        </ul>
                    </div>
                    <div className='box'>
                        <h3>Products</h3>
                        <ul>
                            <li>Delivery</li>
                            <li>Track Order</li>
                            <li>New Product</li>
                            <li>Old Product</li>
                        </ul>
                    </div>
                    <div className='box'>
                        <h3>Contact Us</h3>
                        <ul>
                            <li> ! ADDRESS HERE !</li>
                            <li>! random number here !</li>
                            <li>fake email here</li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default Footer