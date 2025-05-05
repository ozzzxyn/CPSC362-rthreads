import React, { useEffect, useState } from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import { FaRegEye, FaHeart, FaWindowClose } from "react-icons/fa";
import { RxInstagramLogo } from "react-icons/rx";
import { FaXTwitter, FaYoutube, FaCartShopping } from "react-icons/fa6";
import { IoShareSocial } from "react-icons/io5";

const Home = ({ addtocart }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [trendingProduct, setTrendingProduct] = useState([]);
  const [showDetail, setShowDetail] = useState(false);
  const [detail, setDetail] = useState(null);


  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
        setTrendingProduct(data); // default: show all
      })
      .catch((err) => console.error("Failed to load products", err));
  }, []);

  const filtercate = (label) => {
    const getRandomSubset = (count) => {
      const shuffled = [...allProducts].sort(() => Math.random() - 0.5);
      return shuffled.slice(0, count);
    };
  
    const subsetSize = 7; // or any number you prefer
    const filtered = getRandomSubset(subsetSize);
    setTrendingProduct(filtered);
  };
  

  const allTrendingProduct = () => {
    setTrendingProduct(allProducts);
  };

  const detailPage = (product) => {
    setDetail(product);
    setShowDetail(true);
  };
  
  const closeDetail = () => {
    setShowDetail(false);
  };
  

  return (
    <>
    {showDetail && detail && (
  <div className='product_detail'>
    <button className='close_btn' onClick={closeDetail}>
      <FaWindowClose />
    </button>
    <div className='container'>
      <div className='img_box'>
        <img src={`http://localhost:5000/image/${detail.image}.webp`} alt='' />
      </div>
      <div className='info'>
        <h4># {detail.cat}</h4>
        <h2>{detail.Name}</h2>
        <p>{detail.disc}</p>
        <h3>${parseFloat(detail.price).toFixed(2)}</h3>
        <button onClick={() => addtocart(detail)}>Add to Cart</button>
      </div>
    </div>
  </div>
)}

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
                  <h2>Our products by Popularity!</h2>
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
                          <img src={`http://localhost:5000/image/${curElm.image}.webp`} alt='' />
                          <div className='icon'>
                          <div className='icon_box' onClick={() => detailPage(curElm)}><FaRegEye /></div>
                            <div className='icon_box'><FaHeart /></div>
                          </div>
                        </div>
                        <div className='info'>
                          <h3>{curElm.Name}</h3>
                          <p>${parseFloat(curElm.price).toFixed(2)}</p>
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
                    <h3>Celebrity Seal of Approval</h3>
                  </div>
                  <div className='detail'>
                    <div className='img_box'>
                      <img src='http://localhost:5000/image/review.webp' alt='testmonial' />
                    </div>
                    <div className='info'>
                      <h3>Leonardo DiCaprio</h3>
                      <h4>American actor and film producer</h4>
                      <p>"I approve."</p>
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
                      <div className='icon' onClick={() => window.open('https://twitter.com/intent/tweet', '_blank')}><IoShareSocial /></div>
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
