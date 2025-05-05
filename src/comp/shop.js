import React, { useState, useEffect } from 'react';
import './shop.css';
import { FaHeart, FaRegEye, FaWindowClose } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

const Shop = ({ Filter, allcatefilter, addtocart }) => {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]); // Store all for search
  const [showDetail, setShowDetail] = useState(false);
  const [detail, setDetail] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchProducts(); // Load all products initially
  }, []);

  const fetchProducts = (category = "") => {
    const url = category
      ? `http://localhost:5000/api/products?category=${category}`
      : `http://localhost:5000/api/products`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setAllProducts(data); // Store full data for filtering
      })
      .catch((err) => console.error("Failed to load products", err));
  };

  const handleCategoryClick = (category) => {
    fetchProducts(category);
  };

  const handleSearchClick = () => {
    const searchWords = searchQuery.toLowerCase().split(" ").filter(Boolean);
    const filtered = allProducts.filter(product => {
      const name = product.Name.toLowerCase();
      return searchWords.every(word => name.includes(word));
    });
    setProducts(filtered);
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
                  <li onClick={() => handleCategoryClick("shirt")}># Shirts</li>
                  <li onClick={() => handleCategoryClick("jacket")}># Jackets</li>
                  <li onClick={() => handleCategoryClick("flannel")}># Flannels</li>
                  <li onClick={() => handleCategoryClick("hat")}># Hats</li>
                </ul>
              </div>
            </div>
            <div className='banner'>
              <div className='img_box'>
                <img src='image/shipping.png' alt='' />
              </div>
            </div>
            <div className='banner_ad'>
              <div className='img_box_ad'>
                <img src='image/rthreadsad.webp' alt='' />
              </div>
            </div>
          </div>

          <div className='right_box'>
            <div className='banner'>
              <div className='img_box'>
                <img src='image/bannerimage1.jpg' alt='' />
              </div>
            </div>
            <div className='search_box'>
              <input
                type='text'
                value={searchQuery}
                placeholder='Search'
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') handleSearchClick(); }}
              />
              <button type="button" onClick={handleSearchClick}><FiSearch /></button>
            </div>

            <div className='product_box'>
              <h2>Shop Product</h2>
              <div className='product_container'>
                {products.length > 0 ? (
                  products.map((curElm) => (
                    <div className='box' key={curElm.id}>
                      <div className='img_box'>
                        <img src={`http://localhost:5000/image/${curElm.image}.webp`} alt='' />
                        <div className='icon'>
                          <li><FaHeart /></li>
                          <li onClick={() => detailPage(curElm)}><FaRegEye /></li>
                        </div>
                      </div>
                      <div className='detail'>
                        <h3>{curElm.Name}</h3>
                        <p>${parseFloat(curElm.price).toFixed(2)}</p>
                        <button onClick={() => addtocart(curElm)}>Add To Cart</button>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No products found.</p>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Shop;
