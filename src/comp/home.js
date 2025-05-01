import React, { useEffect, useState } from 'react'
import './home.css'
import { Link } from 'react-router-dom';
import HomeProduct from './home_product';
import { FaRegEye } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { RxInstagramLogo } from "react-icons/rx";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";




const Home = ({addtocart}) => {
    //Product category
    const [newProduct, setNewProduct] = useState([])
    const [featuredProduct, setFeaturedProduct] = useState([])
    const [topProduct, setTopProduct] = useState([])
    //Trending product
    const [trendingProduct, setTrendingProduct] = useState(HomeProduct)
    // Filter trending product
    const filtercate = (x) =>
    {
        const filterproduct = HomeProduct.filter((curElm) =>
        {
            return curElm.type === x 
        })
        setTrendingProduct(filterproduct)
    }
    //All Trending Product
    const allTrendingProduct = () =>
    {
        setTrendingProduct(HomeProduct)
    }

    //Product Type
    /*useEffect(() =>
    {
        productcategory()
    })
        */
    const productcategory = () =>
    {
        // New product
        const newcategory = HomeProduct.filter((x) => 
        {
            return x.type === 'new'
        })
        setNewProduct(newcategory)

        //Featured product
        const FeaturedCategory = HomeProduct.filter((x) => 
        {
            return x.type === 'featured'
        })
        setFeaturedProduct(FeaturedCategory)

        // Top Product
        const TopCategory = HomeProduct.filter((x) => 
        {
            return x.type === 'top'
        })
        setTopProduct(TopCategory)
    }
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
                            <h2 onClick={() => allTrendingProduct ()}>Trending Product</h2>
                        </div>
                        <div className='cate'>
                            <h3 onClick={() => filtercate('new')}>New</h3>
                            <h3 onClick={() => filtercate('featured')}>Featured</h3>
                            <h3 onClick={() => filtercate('top')}>Top Selling</h3>
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
                                                <div className='icon'>
                                                    <div className='icon_box'>
                                                        <FaRegEye />
                                                    </div>
                                                    <div className='icon_box'>
                                                        <FaHeart />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='info'>
                                                <h3>{curElm.Name}</h3>
                                                <p>${curElm.price}</p>
                                                <button className='btn' onClick={() => addtocart (curElm)}>Add to Cart</button>
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
                    <div className='right_container'>
                        <div className='testimonial'>
                            <div className='head'>
                                <h3>Our Testimonial</h3>
                            </div>
                            <div className='detail'>
                                <div className='img_box'>
                                    <img src='image/' alt='testmonial'></img>
                                </div>
                                <div className='info'>
                                    <h3>Chat Bot here maybe?</h3>
                                    <h4>Web Designer</h4>
                                    <p>blah blah blah description</p>
                                </div>
                            </div>
                        </div>
                        <div className='newsletter'>
                            <div className='head'>
                                <h3>Newsletter</h3>
                            </div>
                            <div className='form'>
                                <p>Join our Mailing list, unsure to keep</p>
                                <input type='email' placeholder='E-mail' autoComplete='off'></input>
                                <button>Subscribe</button>
                                <div className='icon_box'>
                                    <div className='icon'>
                                        <RxInstagramLogo />
                                    </div>
                                    <div className='icon'>
                                        <FaXTwitter />
                                    </div>
                                    <div className='icon'>
                                        <FaYoutube />
                                    </div>
                                    <div className='icon'>
                                        <IoShareSocial />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='banners'>
            <div className='container'>
                <div className='left_box'>
                    <div className='box'>
                        <img src='image/bannerplaceholder.jpg' alt='banner'></img>
                    </div>
                    <div className='box'>
                        <img src='image/bannerplaceholder2.png' alt='banner'></img>
                    </div>
                </div>
                <div className='right_box'>
                    <div className='top'>
                        <img src='image/bannerplaceholder3.png' alt =''></img>
                        <img src='image/bannerplaceholder4.png' alt =''></img>
                    </div>
                    <div className='bottom'>
                        <img src='image/bannerplaceholder5.webp' alt=''></img>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home