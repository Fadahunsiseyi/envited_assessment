import React from 'react';
import Image from '../img/image 1.png';
import './home.css';

const Home = () => (
  <section className="home-container">
    <div className="home-wrapper">
      <div className="img-container">
        <img src={Image} alt="A movie night" />
      </div>
      <div className="info-container">
        <h2>Imagine if Snapchat had events.</h2>
        <p>
          Easily host and share events with your friends across any social
          media.
        </p>
        <button type="button" className="btn btn-primary">
          Create my event
        </button>
      </div>
    </div>
  </section>
);

export default Home;
