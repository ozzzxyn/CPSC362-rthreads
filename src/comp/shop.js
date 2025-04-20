import React from 'react'
import './shop.css'
import { FaHeart } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

const Shop = ({shop}) => {
  return (
    <>
    <div className='shop'>
        <h2># Shop</h2>
        <p>Home . Shop</p>
        <div className='container'>
            <div className='left_box'>
                <div className='category'>
                    <div className='header'>
                        <h3>All Categories</h3>
                    </div>
                    <div className='box'>
                        <ul>
                            <li># Pants</li>
                            <li># Shirt</li>
                            <li># Jacket</li>
                            <li># Flannels</li>
                        </ul>
                    </div>
                </div>
                <div className='banner'>
                    <div className='img_box'>
                        <img src='image/bannerplaceholder2.png' alt=''></img>
                    </div>
                </div>
            </div>
            <div className='right_box'>
                <div className='banner'>
                    <div className='img_box'>
                        <img src='image/bannerplaceholder4.png' alt=''></img>
                    </div>
                </div>
                <div className='product_box'>
                    <h2>Shop Product</h2>
                    <div className='product_container'>
                        {
                            shop.map((curElm) =>
                            {
                                return(
                                    <>
                                    <div className='box'>
                                        <div className='img_box'>
                                            <img src={curElm.image} alt=''></img>
                                            <div className='icon'>
                                                <li><FaHeart /></li>
                                                <li><FaRegEye /></li>
                                            </div>
                                        </div>
                                    </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}

export default Shop