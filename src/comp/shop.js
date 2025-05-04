import React, { useState, useEffect } from 'react';
import './shop.css';
import { FaHeart, FaRegEye, FaWindowClose } from "react-icons/fa";

const Shop = ({ Filter, allcatefilter, addtocart }) => {
  const [products, setProducts] = useState([]);
  const [showDetail, setShowDetail] = useState(false);
  const [detail, setDetail] = useState(null);

  useEffect(() => {
  fetchProducts(); // Load all products initially
}, []);

const fetchProducts = (category = "") => {
  const url = category
    ? `http://localhost:5000/api/products?category=${category}`
    : `http://localhost:5000/api/products`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => setProducts(data))
    .catch((err) => console.error("Failed to load products", err));
};

const handleCategoryClick = (category) => {
  fetchProducts(category); // fetch products by category
};

  

  const detailpage = (product) => {
    setDetail(product);
    setShowDetail(true);
  };

  const closedetail = () => {
    setShowDetail(false);
  };

  return (
    <>
      {showDetail && detail && (
        <div className='product_detail'>
          <button className='close_btn' onClick={closedetail}>
            <FaWindowClose />
          </button>
          <div className='container'>
            <div className='img_box'>
              <img src={`http://localhost:5000${detail.image}`} alt='' />
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
                  <li onClick={() => fetchProducts()}># All</li>
                  <li onClick={() => handleCategoryClick("pants")}># Pants</li>
                  <li onClick={() => handleCategoryClick("shirt")}># Shirt</li>
                  <li onClick={() => handleCategoryClick("jacket")}># Jacket</li>
                  <li onClick={() => handleCategoryClick("flannel")}># Flannels</li>
                </ul>
              </div>
            </div>
            <div className='banner'>
              <div className='img_box'>
                <img src='image/shipping.png' alt='' />
              </div>
            </div>
          </div>

          <div className='right_box'>
            <div className='banner'>
              <div className='img_box'>
                <img src='image/bannerimage1.jpg' alt='' />
              </div>
            </div>
            <div className='product_box'>
              <h2>Shop Product</h2>
              <div className='product_container'>
                {products.map((curElm) => (
                  <div className='box' key={curElm.id}>
                    <div className='img_box'>
                      <img src={`http://localhost:5000${curElm.image}`} alt='' />
                      <div className='icon'>
                        <li><FaHeart /></li>
                        <li onClick={() => detailpage(curElm)}><FaRegEye /></li>
                      </div>
                    </div>
                    <div className='detail'>
                      <h3>{curElm.Name}</h3>
                      <p>${parseFloat(curElm.price).toFixed(2)}</p>
                      <button onClick={() => addtocart(curElm)}>Add To Cart</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Shop;
