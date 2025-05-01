import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <p className="about-paragraph">
        <strong>Radiant Threads</strong> was born from a simple idea — to create clothing that feels as good as it looks.
        We believe that style should be effortless, comfort should be standard, and quality should never be compromised.
      </p>
      <p className="about-paragraph">
        Founded with a passion for timeless fashion and everyday wearability, Radiant Threads offers a curated collection
        of shirts, pants, jackets, and flannels designed for modern life. Whether you're dressing for a laid-back weekend,
        a day at work, or a night out, our pieces are made to move with you — stylish, functional, and built to last.
      </p>
      <p className="about-paragraph">
        We’re inspired by clean lines, versatile designs, and that perfect balance between classic and contemporary.
        Every item we make reflects our commitment to detail, durability, and down-to-earth fashion that fits your lifestyle.
      </p>
      <p className="about-paragraph">
        At Radiant Threads, we don’t just sell clothes — we help you express yourself through what you wear. Thanks for being part of our story.
      </p>
      <p className="about-signoff">
        Stay radiant. Stay you.
      </p>
    </div>
  );
};

export default About;
