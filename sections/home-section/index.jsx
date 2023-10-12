import React from 'react';
import Image from 'next/image';
import foodImage from '../../public/images/pasta.jpg';

import './style.css'
const HomeSection = () => {
  return (
    <div className="container home-container">
      <div id="homeSection" className="d-flex justify-content-center">
        <div className="row homeRow">
          <div className="col-lg-6 homeTxtCol">
            <h1 className="homeHeading">
              Where the Flavor <br />
              <span data-text="INEBRIATES">INEBRIATES</span>
              <br />
              you
            </h1>
            <br />
            <div className="homeBtnDiv">
              <a href="#categorySection" className="btn homeBtn">
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
