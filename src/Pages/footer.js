import React from "react";
import "./../Assets/css/style.css";
import "./../Assets/css/bootstrap.css";
import "./../Assets/css/magnific-popup.css";
import "./../Assets/css/nice-select.css";
import "./../Assets/css/animate.min.css";
import "./../Assets/css/owl.carousel.css";
import { Img, Icons } from '../Utilities/Icons.js';

function Footer(){
  return(
    <>
      <footer className="footer-area section-gap">
        <div className="container">          
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h4>About Us</h4>
                <p>
                  We are a global immigration organisation building a name for ourselves in every nation we establish ourselves in to assist people in immigrating to Canada the nation where dreams come true... Read More
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h4>Quick Links</h4>
                <ul className="footer_ul">
                  <li className="footer_li">Visit</li>
                  <li className="footer_li">Study</li>
                  <li className="footer_li">Work</li>
                  <li className="footer_li">Invest</li>
                  <li className="footer_li">Permanent Residency</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h4>Follow Us</h4>
                <img alt="" src={Img.footer_img} className="footer_img"></img>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h4>Follow Us</h4>
                <ul className="footer_ul footer_ul_sty">
                  <li>
                    <img alt="" src={Icons.linkedin}></img>
                  </li>
                  <li>
                    <img alt="" src={Icons.twitter}></img>
                  </li>
                  <li>
                    <img alt="" src={Icons.facebook}></img>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;