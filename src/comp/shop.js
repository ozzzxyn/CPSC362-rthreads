import React, { useState } from 'react'
import './shop.css'
import { FaHeart } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";

const Shop = ({shop, Filter, allcatefilter, addtocart}) => {
    // Toggle product detail
    const [showDetail, setShowDetail] = useState(false)
    // detail page data
    const [detail, setDetail] = useState([])
    //showing details
    const detailpage = (product) =>
    {
        const detaildata = ([{product}])
        const productdetail = detaildata[0]['product']
        setDetail([{product}])
        setDetail(productdetail)
        setShowDetail(true)
    }
    const closedetail = () =>
    {
        setShowDetail(false)
    }
  return (
    <>
    {
        showDetail ?
        <>
        <div className='product_detail'>
            <button className='close_btn' onClick={closedetail}><FaWindowClose /></button>
            <div className='container'>
                <div className='img_box'>
                    <img src={detail.image} alt=''></img>
                </div>
                <div className='info'>
                    <h4># {detail.cat}</h4>
                    <h2>{detail.Name}</h2>
                    <p>ersffaewfaew</p>
                    <h3>${detail.price}</h3>
                    <button onClick={() => addtocart(detail)}>Add to Cart</button>
                </div>
            </div>
        </div>
        </>
        : null
    }
    
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
                            <li onClick={() => allcatefilter ()}># All</li>
                            <li onClick={() => Filter ("pants")}># Pants</li>
                            <li onClick={() => Filter ("shirt")}># Shirt</li>
                            <li onClick={() => Filter ("jacket")}># Jacket</li>
                            <li onClick={() => Filter ("flannel")}># Flannels</li>
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
                                                <li onClick={() => detailpage (curElm)}><FaRegEye /></li>
                                            </div>
                                        </div>
                                        <div className='detail'>
                                            <h3>{curElm.Name}</h3>
                                            <p>$ {curElm.price}</p>
                                            <button onClick={() => addtocart(curElm)}>Add To Cart</button>
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