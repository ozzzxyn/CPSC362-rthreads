import React from 'react'
import { MdLocalShipping } from 'react-icons/md';
import { FiSearch } from "react-icons/fi";
import { IoMdLogIn } from "react-icons/io";
import { useAuth0 } from "@auth0/auth0-react";
import { RiLogoutCircleLine } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import {Link} from 'react-router-dom';

import './nav.css';

const Nav = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  return (
    <>
    <div className='header'>
        <div className='top_header'>
            <div className='icon'>
              <MdLocalShipping />
            </div>
            <div className='info'>
              <p>Free Shipping when up to $30!</p>
            </div>
        </div>
        <div className='mid_header'>
          <div className='logo'>
            <img src='image/logo2.png' alt='logo'></img>
          </div>
          <div className='search_box'>
            <input type='text' value ='' placeholder='search'></input>
            <button><FiSearch /></button>
          </div>
          {
            isAuthenticated ?
            // if user is login then Logout button will appear
            <div className='user'>
              <div className='icon'>
                <RiLogoutCircleLine />
              </div>
              <div className='btn'>
                <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
              </div>
            </div>
          :
          //if user is not logged in, then the Login button appears
          <div className='user'>
            <div className='icon'>
              <IoMdLogIn />
            </div>
            <div className='btn'>
              <button onClick={() => loginWithRedirect()}>Login</button>
            </div>
          </div>
          }
        </div>
        <div className='last_header'>
          <div className='user_profile'>
            {
              // user profile will show
              isAuthenticated ? 
              <>
              <div className='icon'>
                <FaUser />
              </div>
              <div className='info'>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
              </div>
              </>
              :
              <>
              <div className='icon'>
                <FaUser />
              </div>
              <div className='info'>
                <p>Please Login</p>
              </div>
              </>
            }
          </div>
          <div className='nav'>
            <ul>
              <li><Link to='/' className='link'>Home</Link></li>
              <li><Link to='/shop' className='link'>Shop</Link></li>
              <li><Link to='/collection' className='link'>Collection</Link></li>
              <li><Link to='/about' className='link'>About Us</Link></li>
              <li><Link to='/contact' className='link'>Contact</Link></li>
            </ul>
          </div>
          <div className='offer'>
            <p>Get 13% Off with Code: THREADS13</p>
          </div>
        </div>
    </div>
    </>
  )
}

export default Nav