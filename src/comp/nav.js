import React from 'react'
import { MdLocalShipping } from 'react-icons/md';
import { FiSearch } from "react-icons/fi";
import { IoMdLogIn } from "react-icons/io";


import './nav.css';

const Nav = () => {
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
            <img src='image/logo.png' alt='logo'></img>
          </div>
          <div className='search_box'>
            <input type='text' value ='' placeholder='search'></input>
            <button><FiSearch /></button>
          </div>
          <div className='user'>
            <div className='icon'>
            <IoMdLogIn />
            </div>
            <div className='btn'>
              <button>Login</button>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Nav