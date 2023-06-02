import photo from "../Image/blog.png";
import "../Css/blogs.css";
import logo from "../Image/brandlogo.png";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import Header from "./Header";
// import { useLocation } from "react-router-dom";

function Blogs() {
  const [logoVisible, setLogoVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [sloganVisible, setSloganVisible] = useState(false);
  const [arrowVisible, setArrowVisible] = useState(false);

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
      <div class="blog-post">
        <div class="image-container">
          <img
            src="https://images.unsplash.com/photo-1665686440627-936e9700a100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wxfDF8YWxsfDF8fHx8fHwyfHwxNjcxMjc4Mjc5&ixlib=rb-4.0.3&q=80&w=600"
            alt="BlogPostImage"
          />
        </div>
        <div class="content-container">
          <p>category</p>
          <h2>heading</h2>
          <p>content</p>
        </div>
      </div>
    </>
  );
}

export default Blogs;

// import photo from "../Image/blog.png";
// import "../Css/blogs.css";
// import logo from "../Image/brandlogo.png";
// import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useState, useEffect } from "react";
// import { CSSTransition } from "react-transition-group";
// import Header from "./Header";

// function Blogs() {
//   const [logoVisible, setLogoVisible] = useState(false);
//   const [textVisible, setTextVisible] = useState(false);
//   const [sloganVisible, setSloganVisible] = useState(false);
//   const [arrowVisible, setArrowVisible] = useState(false);

//   useEffect(() => {
//     const timer1 = setTimeout(() => setLogoVisible(true), 1000);
//     const timer2 = setTimeout(() => setTextVisible(true), 1000);
//     const timer3 = setTimeout(() => setSloganVisible(true), 3700);
//     const timer4 = setTimeout(() => setArrowVisible(true), 4000);

//     return () => {
//       clearTimeout(timer1);
//       clearTimeout(timer2);
//       clearTimeout(timer3);
//       clearTimeout(timer4);
//     };
//   }, []);

//   return (
//     <>
//       <div className="container">
//         <img className="blogimg" src={photo} alt="Logo" />
//         <CSSTransition
//           in={logoVisible}
//           timeout={1000}
//           classNames="logo-animation"
//           unmountOnExit
//         >
//           <img className="logo" src={logo} alt="Logo" />
//         </CSSTransition>

//         <CSSTransition
//           in={textVisible}
//           timeout={500}
//           classNames="text-animation"
//           unmountOnExit
//         >
//           <p className="text">𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐭𝐨 𝐁𝐋𝐎𝐆𝐈𝐅𝐘...</p>
//         </CSSTransition>

//         <CSSTransition
//           in={sloganVisible}
//           timeout={1000}
//           classNames="slogan-animation"
//           unmountOnExit
//         >
//           <p className="slogen">
//             𝐄𝐱𝐩𝐥𝐨𝐫𝐞 𝐚 𝐰𝐨𝐫𝐥𝐝 𝐨𝐟 𝐢𝐝𝐞𝐚𝐬, 𝐢𝐧𝐬𝐩𝐢𝐫𝐚𝐭𝐢𝐨𝐧, 𝐚𝐧𝐝 𝐤𝐧𝐨𝐰𝐥𝐞𝐝𝐠𝐞 𝐚𝐭 𝐁𝐥𝐨𝐠𝐢𝐟𝐲.
//             𝐔𝐧𝐥𝐞𝐚𝐬𝐡 𝐲𝐨𝐮𝐫 𝐜𝐫𝐞𝐚𝐭𝐢𝐯𝐢𝐭𝐲, 𝐬𝐡𝐚𝐫𝐞 𝐲𝐨𝐮𝐫 𝐬𝐭𝐨𝐫𝐢𝐞𝐬, 𝐚𝐧𝐝 𝐞𝐧𝐠𝐚𝐠𝐞 𝐰𝐢𝐭𝐡 𝐚
//             𝐯𝐢𝐛𝐫𝐚𝐧𝐭 𝐜𝐨𝐦𝐦𝐮𝐧𝐢𝐭𝐲 𝐨𝐟 𝐩𝐚𝐬𝐬𝐢𝐨𝐧𝐚𝐭𝐞 𝐛𝐥𝐨𝐠𝐠𝐞𝐫𝐬.
//           </p>
//         </CSSTransition>
//         <CSSTransition
//           in={arrowVisible}
//           timeout={1000}
//           classNames="slogan-animation"
//           unmountOnExit
//         >
//           <p>
//             <FontAwesomeIcon
//               className="scrollicon"
//               icon={faAnglesDown}
//               beatFade
//             />
//           </p>
//         </CSSTransition>
//       </div>
//       <Header />
//       <div class="blog-post">
//         <div class="image-container">
//           <img
//             src="https://images.unsplash.com/photo-1665686440627-936e9700a100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wxfDF8YWxsfDF8fHx8fHwyfHwxNjcxMjc4Mjc5&ixlib=rb-4.0.3&q=80&w=600"
//             alt="BlogPostImage"
//           />
//         </div>
//         <div class="content-container">
//           <h2>Blog Post Heading</h2>
//           <p>Blog post description goes here...</p>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Blogs;
