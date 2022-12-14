import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../img/image 1.png';
import './home.css';

const Home = () => (
  <section className="home-container">
    <div className="home-wrapper">
      <div className="img-container">
        <img src={Image} alt="A movie night" />
      </div>
      <div className="info-container">
        <h2>
          Imagine if
          {' '}
          <span>Snapchat</span>
          {' '}
          had events.
        </h2>
        <p>
          Easily host and share events with your friends across any social
          media.
        </p>
        <Link to="/create">
          <button type="button" className="btn btn-primary">
            Create my event
          </button>
        </Link>
      </div>
    </div>
  </section>
);

export default Home;
