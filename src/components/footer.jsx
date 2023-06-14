import React from "react";
import "../Css/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="row">
          <div className="footer-col">
            <h4>About Us</h4>
            <p>
              At our blog website, we are passionate about sharing captivating
              stories, expert advice, and valuable insights. Our mission is to
              provide a platform where readers can find inspiration, gain
              knowledge, and connect with a community of like-minded
              individuals. Whether you're seeking lifestyle tips, informative
              articles, or entertaining content, we strive to deliver engaging
              and high-quality blog posts that cater to a diverse range of
              interests.
            </p>
          </div>
          <div className="footer-col">
            <h4>get help</h4>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Terms and Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Cookie Policy</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <a href="#">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2023 Blog Website. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
