import React from 'react';
import './thankyou.css';
import { Link } from 'react-router-dom'


const ThankYou = (cart, setCart) => {
  return (
    <div className="thanks-container">
      <h1 className="thanks-title">Thank You!</h1>
      <p className="thanks-paragraph">
        <strong>Radiant Threads</strong> Greatly appreciates your support
      </p>
      <p className="paragraph-signoff">
        We hope you enjoy your new clothes!
      </p>
      <Link to='/shop'><button>Back To Store</button></Link>
    </div>
  );
};

export default ThankYou;
