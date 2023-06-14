import React, { useState, useEffect } from "react";
import axios from "axios";
import photo from "../Image/blog.png";
import "../Css/blogs.css";
import logo from "../Image/brandlogo.png";
import { faAnglesDown, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSTransition } from "react-transition-group";
import Header from "./Header";
import Footer from "./footer";

function Blogs() {
  const [logoVisible, setLogoVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [sloganVisible, setSloganVisible] = useState(false);
  const [arrowVisible, setArrowVisible] = useState(false);
  const [blogdata, setblogdata] = useState([]);

  const Button = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    return (
      <button
        className="read-more-button"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Read More
        {isHovered && (
          <span className="arrow">
            <FontAwesomeIcon icon={faAnglesRight} />
          </span>
        )}
      </button>
    );
  };

  useEffect(() => {
    const timer1 = setTimeout(() => setLogoVisible(true), 1000);
    const timer2 = setTimeout(() => setTextVisible(true), 1000);
    const timer3 = setTimeout(() => setSloganVisible(true), 3700);
    const timer4 = setTimeout(() => setArrowVisible(true), 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    axios("http://192.168.1.150:1234/api/blogs/allblogs")
      .then((responce) => {
        console.log(responce.data);

        setblogdata(responce.data);
      })

      .catch((error) => {
        console.error("Error fetching blog data", error);
      });
    console.log("hello");
  }, []);
  console.log(blogdata[0]?.coverimage);
  return (
    <>
      <div className="containers">
        <img className="blogimg" src={photo} alt="Logo" />
        <CSSTransition
          in={logoVisible}
          timeout={1000}
          classNames="logo-animation"
          unmountOnExit
        >
          <img className="logo" src={logo} alt="Logo" />
        </CSSTransition>

        <CSSTransition
          in={textVisible}
          timeout={500}
          classNames="text-animation"
          unmountOnExit
        >
          <p className="text">𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐭𝐨 𝐁𝐋𝐎𝐆𝐈𝐅𝐘...</p>
        </CSSTransition>

        <CSSTransition
          in={sloganVisible}
          timeout={1000}
          classNames="slogan-animation"
          unmountOnExit
        >
          <p className="slogen">
            𝐄𝐱𝐩𝐥𝐨𝐫𝐞 𝐚 𝐰𝐨𝐫𝐥𝐝 𝐨𝐟 𝐢𝐝𝐞𝐚𝐬, 𝐢𝐧𝐬𝐩𝐢𝐫𝐚𝐭𝐢𝐨𝐧, 𝐚𝐧𝐝 𝐤𝐧𝐨𝐰𝐥𝐞𝐝𝐠𝐞 𝐚𝐭 𝐁𝐥𝐨𝐠𝐢𝐟𝐲.
            𝐔𝐧𝐥𝐞𝐚𝐬𝐡 𝐲𝐨𝐮𝐫 𝐜𝐫𝐞𝐚𝐭𝐢𝐯𝐢𝐭𝐲, 𝐬𝐡𝐚𝐫𝐞 𝐲𝐨𝐮𝐫 𝐬𝐭𝐨𝐫𝐢𝐞𝐬, 𝐚𝐧𝐝 𝐞𝐧𝐠𝐚𝐠𝐞 𝐰𝐢𝐭𝐡 𝐚
            𝐯𝐢𝐛𝐫𝐚𝐧𝐭 𝐜𝐨𝐦𝐦𝐮𝐧𝐢𝐭𝐲 𝐨𝐟 𝐩𝐚𝐬𝐬𝐢𝐨𝐧𝐚𝐭𝐞 𝐛𝐥𝐨𝐠𝐠𝐞𝐫𝐬.
          </p>
        </CSSTransition>
        <CSSTransition
          in={arrowVisible}
          timeout={1000}
          classNames="slogan-animation"
          unmountOnExit
        >
          <p>
            <FontAwesomeIcon
              className="scrollicon"
              icon={faAnglesDown}
              beatFade
            />
          </p>
        </CSSTransition>
      </div>
      <Header />
      {blogdata.map((post) => (
        <div className="blog-post" key={post.id}>
          <div className="image-container">
            <img src={post.coverimage} alt="BlogPostImage" />
          </div>
          <div className="content-container">
            <h3>{post.categories}</h3>
            <h1>{post.headings}</h1>
            <p>{post.contents}</p>
            <Button />
          </div>
        </div>
      ))}

      <Footer />
    </>
  );
}

export default Blogs;
