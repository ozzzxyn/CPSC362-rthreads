import React, { useState } from 'react'
import './home.css'
import { Link } from 'react-router-dom';
import HomeProduct from './home_product';

const Home = () => {
    const [trendingProduct, setTrendingProduct] = useState(HomeProduct)
    return (
    <>
    <div className='home'>
        <div className='top_banner'>
            <div className='content'>
                <h3>Product detail here</h3>
                <h2>product here</h2>
                <p>Offer for product order here</p>
                <Link to='/shop' className='link'>Shop Now!</Link>
            </div>
        </div>
        <div className='trending'>
            <div className='container'>
                <div className='left_box'>
                    <div className='header'>
                        <div className='heading'>
                            <h2>Trending Product</h2>
                        </div>
                        <div className='cate'>
                            <h3>New</h3>
                            <h3>Featured</h3>
                            <h3>Top Selling</h3>
                        </div>
                    </div>
                    <div className='products'>
                        <div className='container'>
                            {
                                trendingProduct.map((curElm) => 
                                {
                                    return(
                                        <>
                                        <div className='box'>
                                            <div className='img_box'>
                                                <img src={curElm.image} alt=''></img>
                                            </div>
                                        </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className='right_box'>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home