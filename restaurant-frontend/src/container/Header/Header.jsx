import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The Key To Fine Dining</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Embarking on a gastronomic journey, fine dining is a symphony of culinary artistry and opulent aesthetics. Within the sophisticated ambiance, masterful chefs curate exquisite plates, and attentive service transforms each meal into a transcendent experience. It's a meticulous orchestration of flavor, ambiance, and service, elevating dining to a sublime indulgence. </p>
      <button type="button" className="custom__button"><a href="#menu">Explore Menu</a></button>

    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
