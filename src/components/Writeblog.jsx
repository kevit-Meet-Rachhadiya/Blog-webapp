import React, { useState, useRef } from "react";
import axios from "axios";
import "../Css/Writeblog.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Writeblog = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);
  const [categories, setCategories] = useState("");
  const [heading, setHeading] = useState("");
  const [content, setContent] = useState("");
  const fileInputRef = useRef(null);
  const imageInputRef = useRef(null);

  const handleImageClick = (event) => {
    event.preventDefault();
    imageInputRef.current.click();
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setSelectedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleUploadToTextArea = (event) => {
    event.preventDefault();
    fileInputRef.current.click();
  };

  const handleFileSelect = (event) => {
    const uploadedImages = Array.from(event.target.files);
    setImages((prevImages) => [...prevImages, ...uploadedImages]);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategories(event.target.value);
  };

  const handleHeadingChange = (event) => {
    setHeading(event.target.value);
  };

  const handlePublish = () => {
    const newBlog = {
      image: selectedImage,
      categories,
      heading,
      content,
      // userId,
    };

    axios
      .post("https://localhost:1234/api/blogs/addblog", newBlog)
      .then((response) => {
        console.log(response.data);

        setSelectedImage(null);
        setCategories("");
        setHeading("");
        setContent("");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const generateImageTags = () => {
    return images.map((image, index) => (
      <img
        key={index}
        src={URL.createObjectURL(image)}
        alt="upload-images"
        width="200px"
        height="200px"
      />
    ));
  };

  return (
    <div>
      <form className="form-containers">
        {selectedImage && (
          <div>
            <img src={selectedImage} alt="Selected" id="blogimg" />
          </div>
        )}
        {!selectedImage && (
          <div className="uploaditem">
            <p>Select Your Image</p>
            <FontAwesomeIcon
              className="uploadicon"
              onClick={handleImageClick}
              icon={faCloudArrowUp}
              fade
              beat
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              id="select-menu"
              ref={imageInputRef}
            />
          </div>
        )}
        <div className="category-content">
          <input
            className="category"
            placeholder="Write Your Category"
            onChange={handleCategoryChange}
            value={categories}
          ></input>
          <input
            className="heading"
            placeholder="Write Your Heading"
            onChange={handleHeadingChange}
            value={heading}
          ></input>
          <textarea
            name="content"
            className="blog-content"
            placeholder="Write Your Content About Your Blog"
            onChange={handleContentChange}
            value={content}
          ></textarea>
        </div>
        <div className="generateblogimg">{generateImageTags()}</div>
        <div className="btn-container">
          <Link
            to={{
              pathname: "/",
              search: `?heading=${encodeURIComponent(
                heading
              )}&content=${encodeURIComponent(
                content
              )}&category=${encodeURIComponent(categories)}`,
            }}
          >
            <button className="blog-button" onClick={handlePublish}>
              Publish
            </button>
          </Link>
          <button className="blog-button" onClick={handleUploadToTextArea}>
            Upload Image
          </button>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileSelect}
            multiple
          />
        </div>
      </form>
    </div>
  );
};

export default Writeblog;

// import React, { useState, useRef } from "react";
// import axios from "axios";
// import "../Css/Writeblog.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";

// const Writeblog = () => {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [images, setImages] = useState([]);
//   const [content, setContent] = useState("");
//   const [categories, setCategories] = useState("");
//   const [heading, setHeading] = useState("");
//   const fileInputRef = useRef(null);
//   const imageInputRef = useRef(null);

//   const handleImageClick = (event) => {
//     event.preventDefault();
//     imageInputRef.current.click();
//   };

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     const reader = new FileReader();

//     reader.onload = () => {
//       setSelectedImage(reader.result);
//     };

//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleUploadToTextArea = (event) => {
//     event.preventDefault();
//     fileInputRef.current.click();
//   };

//   const handleFileSelect = (event) => {
//     const uploadedImages = Array.from(event.target.files);
//     setImages((prevImages) => [...prevImages, ...uploadedImages]);
//   };

//   const handleContentChange = (event) => {
//     setContent(event.target.value);
//   };

//   const handleCategoryChange = (event) => {
//     setCategories(event.target.value);
//   };

//   const handleHeadingChange = (event) => {
//     setHeading(event.target.value);
//   };

//   const generateImageTags = () => {
//     return images.map((image, index) => (
//       <img
//         key={index}
//         src={URL.createObjectURL(image)}
//         alt="upload-images"
//         width="200px"
//         height="200px"
//       />
//     ));
//   };

//   const handlePublish = () => {
//     const formData = new FormData();
//     formData.append("categories", categories);
//     formData.append("heading", heading);
//     formData.append("content", content);
//     images.forEach((image, index) => {
//       formData.append("image" + index, image);
//     });

//     axios
//       .post("http://localhost:1234/api/blogs/addblog", formData)
//       .then((response) => {
//         console.log(response.data);

//         setSelectedImage(null);
//         setImages([]);
//         setContent("");
//         setCategories("");
//         setHeading("");
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };
//   return (
//     <div>
//       <form className="form-container">
//         {selectedImage && (
//           <div>
//             <img src={selectedImage} alt="Selected" id="blogimg" />
//           </div>
//         )}
//         {!selectedImage && (
//           <div className="uploaditem">
//             <p>Select Your Image</p>

//             <FontAwesomeIcon
//               className="uploadicon"
//               onClick={handleImageClick}
//               icon={faCloudArrowUp}
//               fade
//               beat
//             />

//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleImageUpload}
//               id="select-menu"
//               ref={imageInputRef}
//             />
//           </div>
//         )}
//         <div className="category-content">
//           <input
//             className="category"
//             placeholder="Write Your Category"
//             onChange={handleCategoryChange}
//           ></input>
//           <input
//             className="heading"
//             placeholder="Write Your Heading"
//             onChange={handleHeadingChange}
//           ></input>
//           <textarea
//             name="content"
//             className="blog-content"
//             placeholder="Write Your Content About Your Blog"
//             onChange={handleContentChange}
//             value={content}
//           ></textarea>
//         </div>
//         <div className="generateblogimg">{generateImageTags()}</div>
//         <div className="btn-container">
//           <Link
//             to={{
//               pathname: "/",
//               search: `?heading=${encodeURIComponent(
//                 heading
//               )}&content=${encodeURIComponent(content)}`,
//             }}
//           >
//             <button className="blog-button" onClick={handlePublish}>
//               Publish
//             </button>
//           </Link>

//           <button className="blog-button" onClick={handleUploadToTextArea}>
//             Upload Image
//           </button>
//           <input
//             type="file"
//             ref={fileInputRef}
//             style={{ display: "none" }}
//             onChange={handleFileSelect}
//             multiple
//           />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Writeblog;

// // import React, { useState, useRef } from "react";
// // import axios from "axios";
// // import "../Css/Writeblog.css";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";

// // const Writeblog = () => {
// //   const [selectedImage, setSelectedImage] = useState(null);
// //   const [images, setImages] = useState([]);
// //   const [content, setContent] = useState("");
// //   const [categories, setCategories] = useState("");
// //   const [heading, setHeading] = useState("");
// //   const fileInputRef = useRef(null);
// //   const imageInputRef = useRef(null);

// //   const handleImageClick = (event) => {
// //     event.preventDefault();
// //     imageInputRef.current.click();
// //   };

// //   const handleImageUpload = (event) => {
// //     const file = event.target.files[0];
// //     const reader = new FileReader();

// //     reader.onload = () => {
// //       setSelectedImage(reader.result);
// //     };

// //     if (file) {
// //       reader.readAsDataURL(file);
// //     }
// //   };

// //   const handleUploadToTextArea = (event) => {
// //     event.preventDefault();
// //     fileInputRef.current.click();
// //   };

// //   const handleFileSelect = (event) => {
// //     const uploadedImages = Array.from(event.target.files);
// //     setImages((prevImages) => [...prevImages, ...uploadedImages]);
// //   };

// //   const handleContentChange = (event) => {
// //     setContent(event.target.value);
// //   };

// //   const handleCategoryChange = (event) => {
// //     setCategories(event.target.value);
// //   };

// //   const handleHeadingChange = (event) => {
// //     setHeading(event.target.value);
// //   };

// //   const generateImageTags = () => {
// //     return images.map((image, index) => (
// //       <img
// //         key={index}
// //         src={URL.createObjectURL(image)}
// //         alt="upload-images"
// //         width="200px"
// //         height="200px"
// //       />
// //     ));
// //   };

// //   const handlePublish = () => {
// //     const formData = new FormData();
// //     formData.append("categories", categories);
// //     formData.append("heading", heading);
// //     formData.append("content", content);
// //     images.forEach((image, index) => {
// //       formData.append("image" + index, image);
// //     });

// //     axios
// //       .post("http://localhost:1234/api/blogs/addblog", formData)
// //       .then((response) => {
// //         console.log(response.data);

// //         setSelectedImage(null);
// //         setImages([]);
// //         setContent("");
// //         setCategories("");
// //         setHeading("");
// //       })
// //       .catch((error) => {
// //         console.error(error);
// //       });
// //   };
// //   return (
// //     <div>
// //       <form className="form-container">
// //         {selectedImage && (
// //           <div>
// //             <img src={selectedImage} alt="Selected" id="blogimg" />
// //           </div>
// //         )}
// //         {!selectedImage && (
// //           <div className="uploaditem">
// //             <p>Select Your Image</p>

// //             <FontAwesomeIcon
// //               className="uploadicon"
// //               onClick={handleImageClick}
// //               icon={faCloudArrowUp}
// //               fade
// //               beat
// //             />

// //             <input
// //               type="file"
// //               accept="image/*"
// //               onChange={handleImageUpload}
// //               id="select-menu"
// //               ref={imageInputRef}
// //             />
// //           </div>
// //         )}
// //         <div className="category-content">
// //           <input
// //             className="category"
// //             placeholder="Write Your Category"
// //             onChange={handleCategoryChange}
// //           ></input>
// //           <input
// //             className="heading"
// //             placeholder="Write Your Heading"
// //             onChange={handleHeadingChange}
// //           ></input>
// //           <textarea
// //             name="content"
// //             className="blog-content"
// //             placeholder="Write Your Content About Your Blog"
// //             onChange={handleContentChange}
// //             value={content}
// //           ></textarea>
// //         </div>
// //         <div className="generateblogimg">{generateImageTags()}</div>
// //         <div className="btn-container">
// //           <button className="blog-button" onClick={handlePublish}>
// //             Publish
// //           </button>
// //           <button className="blog-button" onClick={handleUploadToTextArea}>
// //             Upload Image
// //           </button>
// //           <input
// //             type="file"
// //             ref={fileInputRef}
// //             style={{ display: "none" }}
// //             onChange={handleFileSelect}
// //             multiple
// //           />
// //         </div>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Writeblog;
