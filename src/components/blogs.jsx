import React, { useState, useEffect } from "react";
import axios from "axios";
import photo from "../Image/blog.png";
import "../Css/blogs.css";
import logo from "../Image/brandlogo.png";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSTransition } from "react-transition-group";
import Header from "./Header";

function Blogs() {
  const [logoVisible, setLogoVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [sloganVisible, setSloganVisible] = useState(false);
  const [arrowVisible, setArrowVisible] = useState(false);
  const [blogdata, setblogdata] = useState([]);

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
    axios
      .get("http://192.168.1.120:1234/api/blogs/allblogs")
      .then((response) => {
        console.log(response.data);
        setblogdata(response.data);
      })
      .catch((error) => {
        console.error("Error fetching blog posts", error);
      });
  }, []);

  const handleDelete = (postId) => {
    axios
      .delete(`http://192.168.1.120:1234/api/blogs/${postId}`)
      .then((response) => {
        setblogdata((prevData) =>
          prevData.filter((post) => post._id !== postId)
        );
      })
      .catch((error) => {
        console.error("Error deleting blog post", error);
      });
  };

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
          <p className="slogen">hellooooo</p>
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
      <div className="blog-post-container">
        {blogdata.map((post) => (
          <div className="blog-post" key={post._id}>
            <img
              src={post.coverimage}
              alt="BlogPostImage"
              className="image-container"
            />
            <div className="content-container">
              <h4>{post.categories}</h4>
              <h2>{post.headings}</h2>
              <p>{post.contents}</p>
            </div>
            <div className="buttons">
              <button className="blog-maintain-btn">READ MORE</button>
              <button className="blog-maintain-btn">EDIT</button>
              <button className="blog-maintain-btn" onClick={() => handleDelete(post._id)}>DELETE</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Blogs;
