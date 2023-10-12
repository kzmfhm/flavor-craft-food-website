import React from 'react';
import Image from 'next/image';
import foodImage from '../../public/images/pasta.jpg';

import './style.css'
const HomeSection = () => {
  return (
    <div className="container home-container">
      <div id="homeSection" className="d-flex justify-content-center">
        <div className="row home-row">
          <div className="col-lg-6 home-txt-col">
            <h1 className="home-heading">
              Where the Flavor <br />
              <span data-text="INEBRIATES">INEBRIATES</span>
              <br />
              you
            </h1>
            <br />
            <div className="home-btn-div">
              <a href="#categorySection" className="btn home-btn">
                Order Now
              </a>
            </div>
          </div>
          <div className="col-lg-6 homeImgCol">
            <Image src={foodImage} alt="food" className="homeImg" width={300}/>
          </div>
        </div>
      </div>
   
    </div>
  );
};

export default HomeSection;
