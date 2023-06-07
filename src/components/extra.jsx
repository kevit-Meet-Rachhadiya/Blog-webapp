import React, { useState, useEffect } from "react";

import axios from "axios";

import photo from "../Image/blog.png";

import "../Css/blogs.css";

import logo from "../Image/brandlogo.png";

import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { CSSTransition } from "react-transition-group";

import Header from "./Header";

import { useSelector } from "react-redux";

// import { useLocation } from "react-router-dom";

function Blogs() {
  const [logoVisible, setLogoVisible] = useState(false);

  const [textVisible, setTextVisible] = useState(false);

  const [sloganVisible, setSloganVisible] = useState(false);

  const [arrowVisible, setArrowVisible] = useState(false);

  const [blogdata, setblogdata] = useState([]);

  const posts = useSelector((state) => state.blog.blogPosts);

  // console.log(posts);

  console.log(blogdata);

  // const location = useLocation();

  // const queryParams = new URLSearchParams(location.search);

  // const headingParam = queryParams.get("heading");

  // const contentParam = queryParams.get("content");

  // const categoryParam = queryParams.get("category");

  // const heading = headingParam ? decodeURIComponent(headingParam) : "";

  // const content = contentParam ? decodeURIComponent(contentParam) : "";

  // const category = categoryParam ? decodeURIComponent(categoryParam) : "";

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
    axios("http://192.168.1.120:1234/api/blogs/allblogs")
      .then((responce) => {
        console.log(responce.data);

        setblogdata(responce.data);
      })

      .catch((error) => {
        console.error("Error fetching blog data", error);
      });
  }, []);

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

      {blogdata.map((post, index) => (
        <div className="blog-post">
          <div className="image-container">
            <img src={post.coverimage} alt="BlogPostImage" />
          </div>

          <div className="content-container">
            <p>{post.headings}</p>

            <h2>{post.categories}</h2>

            <p>{post.contents}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default Blogs;
