import React from 'react'
import './footer.css'
import { FaPiggyBank } from "react-icons/fa6";
import { FaShippingFast } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";
import { GiWallet } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  
  const handleNavigation = (path, scrollPosition = 0) => {
    navigate(path);
    window.scrollTo({
      top: scrollPosition,
      left: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
    <div className='footer'>
        <div className='top-box'>
            <div className='box'></div>
        </div>
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
                    <img src='image/logo_cpsc362_232.png' alt=''></img>
                </div>
                <div className='bottom'>
                    <div className='box'>
                        <h3>Your Account</h3>
                        <ul>
                            <li>
                                <a 
                                  href='/about' 
                                  className='link'
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handleNavigation('/about', 45); // Scroll to 300px from top
                                  }}
                                  data-scroll-position="300"
                                >
                                  About Us
                                </a>
                            </li>
                            <li>
                                <a 
                                  href='/about' 
                                  className='link'
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handleNavigation('/',240); // Scroll to 300px from top
                                  }}
                                  data-scroll-position="300"
                                >
                                  Account
                                </a>
                            </li>
                            <li>
                                <a 
                                  href='/about' 
                                  className='link'
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handleNavigation('/collection',240); // Scroll to 300px from top
                                  }}
                                  data-scroll-position="300"
                                >
                                  Payment
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='box'>
                        <h3>Products</h3>
                        <ul>
                            <li>
                                <a 
                                  href='/about' 
                                  className='link'
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handleNavigation('/collection',240); // Scroll to 300px from top
                                  }}
                                  data-scroll-position="300"
                                >
                                  Payment
                                </a>
                            </li>
                            <li>Track Order</li>
                            <li>
                                <a 
                                  href='/about' 
                                  className='link'
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handleNavigation('/',1050); // Scroll to 300px from top
                                  }}
                                  data-scroll-position="1050"
                                >
                                  New Order
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='box'>
                        <h3>Contact Us</h3>
                        <ul>
                            <li> Radiant Threads HQ, 107 James St, Syracuse, NY 37127 </li>
                            <li> +1-836-932-4063 </li>
                            <li> RThreads@company.com </li>
                        </ul>
                    </div>
                    <div className='map'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d364.3339755120264!2d-76.09433424585382!3d43.06936969977225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d9f2c92866ae77%3A0xd40e03ecea809608!2sJames%20St%20%26%20Ridgewood%20Dr!5e0!3m2!1sen!2sus!4v1746304326092!5m2!1sen!2sus" width="400" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default Footer