import React from 'react';
import Link from 'next/link';
import './style.css';
import githubImage from '../../../public/svg/github.svg'
import fbImage from '../../../public/svg/fb.svg'
import twitterImage from '../../../public/svg/twitter.svg'
import instaImage from '../../../public/svg/insta.svg'
import Image from 'next/image';
const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <h2>FlavorCraft</h2>
        <div className="col-3 social-media">
            <Link href="https://www.facebook.com/">
              <div className="social-media-icon">
              <span><Image src={fbImage} alt='facebook' width={40}></Image></span>
              </div>
            </Link>
            <Link href="https://www.twitter.com/">
            <div className="social-media-icon">
              <span><Image src={twitterImage} alt='twitter' width={40}></Image></span>
              </div>
            </Link>
            <Link href="https://www.instagram.com/">
            <div className="social-media-icon">
              <span><Image src={instaImage} alt='instagram' width={40}></Image></span>
              </div>
            </Link>
           
            <Link href="" target="_blank" rel="noopener noreferrer">
            <div className="social-media-icon">
                <span><Image src={githubImage} alt='github' width={40}></Image></span>
              </div>
            </Link>
          </div>
        </div>

        <div className="contact-row">
          <p>
            <Link href="./privacy-&-policies">
              <span className="footer_clickable">Privacy & Policies</span>
            </Link>
            {' | '}
            <Link href="./terms-&-conditions">
              <span className="footer_clickable">Terms & Conditions</span>
            </Link>
            {' | '}
           <Link href="./contact">
              <span className="footer_clickable">Contact Us</span>
            </Link>
          </p>
        </div>

        <div className="copy">
          <p className="copyright">&copy; Copyright FlavorCraft All rights reserved.</p>
        </div>
      </div>

  );
};

export default Footer;
