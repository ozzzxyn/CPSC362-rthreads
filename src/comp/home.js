import React, { useEffect, useState } from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import { FaRegEye, FaHeart } from "react-icons/fa";
import { RxInstagramLogo } from "react-icons/rx";
import { FaXTwitter, FaYoutube, FaCartShopping } from "react-icons/fa6";
import { IoShareSocial } from "react-icons/io5";

const Home = ({ addtocart }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [trendingProduct, setTrendingProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
        setTrendingProduct(data); // default: show all
      })
      .catch((err) => console.error("Failed to load products", err));
  }, []);

  const filtercate = (x) => {
    const filtered = allProducts.filter((item) => item.type === x);
    setTrendingProduct(filtered);
  };

  const allTrendingProduct = () => {
    setTrendingProduct(allProducts);
  };

  return (
    <>
      <div className='home'>
        <div className='top_banner'>
          <div className='content'>
            <h3>double breasted regular suit jacket</h3>
            <h2>ASOS DESIGN</h2>
            <p>Check this offer here!</p>
            <Link to='/shop' className='link'>Shop Now!</Link>
          </div>
        </div>

        <div className='trending'>
          <div className='container'>
            <div className='left_box'>
              <div className='header'>
                <div className='heading'>
                  <h2 onClick={allTrendingProduct}>Trending Product</h2>
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
                    trendingProduct.map((curElm) => (
                      <div className='box' key={curElm.id}>
                        <div className='img_box'>
                          <img src={`http://localhost:5000${curElm.image}`} alt='' />
                          <div className='icon'>
                            <div className='icon_box'><FaRegEye /></div>
                            <div className='icon_box'><FaHeart /></div>
                          </div>
                        </div>
                        <div className='info'>
                          <h3>{curElm.Name}</h3>
                          <p>${curElm.price}</p>
                          <button className='btn' onClick={() => addtocart(curElm)}>Add to Cart</button>
                        </div>
                      </div>
                    ))
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
                      <img src='image/' alt='testmonial' />
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
                    <input type='email' placeholder='E-mail' autoComplete='off' />
                    <button>Subscribe</button>
                    <div className='icon_box'>
                      <div className='icon' onClick={() => window.open('https://www.instagram.com/', '_blank')}><RxInstagramLogo /></div>
                      <div className='icon' onClick={() => window.open('https://x.com/', '_blank')}><FaXTwitter /></div>
                      <div className='icon' onClick={() => window.open('https://www.youtube.com/', '_blank')}><FaYoutube /></div>
                      <div className='icon' onClick={() => window.open('https://x.com/', '_blank')}><IoShareSocial /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="brands-header">
          <div className="brands-divider">
              <h3>Our Brands</h3>
          </div>
        </div>
        <div className='banners'>
          <div className='container'>
            <div className='left_box'>
              <div className='box'>
                <img src='image/fashion1.webp' alt='banner' />
              </div>
              <div className='box2'>
                <img src='image/fashion2.avif' alt='banner' />
              </div>
            </div>
            <div className='mid_box'>
              <img src='image/fashion3.avif' alt='' />
            </div>
            <div className='right_box'>
              <div className='top'>
                <img src='image/fashion4.webp' alt='' />
              </div>
              <div className='bottom'>
                <img src='image/fashion5.avif' alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
