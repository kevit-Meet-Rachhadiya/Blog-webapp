// import React, { useState, useRef } from "react";
// import "../Css/Writeblog.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";

// const Writeblog = () => {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [images, setImages] = useState([]);
//   const [content, setContent] = useState("");
//   const [category, setCategory] = useState("");
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
//     setCategory(event.target.value);
//   };

//   const handleHeadingChange = (event) => {
//     setHeading(event.target.value);
//   };

//   const handlePublish = (event) => {
//     event.preventDefault();
// const formData = new FormData();

//     formData.append("categories", categories);

//     formData.append("heading", heading);

//     formData.append("content", content);

//     images.forEach((image, index) => {
//       formData.append("image" + index, image);
//     });


//     // Send a POST request to the API endpoint
//     fetch("http://localhost:1234/api/blogs/addblog", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     })
//       .then((response) => {
//         if (response.ok) {
//           // Blog post was successfully created
//           // Reset the form fields
//           setSelectedImage(null);
//           setImages([]);
//           setContent("");
//           setCategory("");
//           setHeading("");
//         } else {
//           // Handle the error case
//           console.error("Error creating blog post");
//         }
//       })
//       .catch((error) => {
//         console.error("Error creating blog post", error);
//       });
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

//   return (
//     <div>
//       <form className="form-container" onSubmit={handlePublish}>
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
//             value={category}
//             onChange={handleCategoryChange}
//           ></input>
//           <input
//             className="heading"
//             placeholder="Write Your Heading"
//             value={heading}
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
//           <button className="blog-button" type="submit">
//             Publish
//           </button>
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

import React, { useState, useRef } from "react";

import axios from "axios";

import "../Css/Writeblog.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";

const Writeblog = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const [images, setImages] = useState([]);

  const [content, setContent] = useState("");

  const [categories, setCategories] = useState("");

  const [heading, setHeading] = useState("");

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

  const handlePublish = () => {
    // Create a form data object to send the data

    const formData = new FormData();

    formData.append("categories", categories);

    formData.append("heading", heading);

    formData.append("content", content);

    images.forEach((image, index) => {
      formData.append("image" + index, image);
    });

    // Make an HTTP POST request to your Node.js server

    axios

      .post("http://localhost:1234/api/blogs", formData)

      .then((response) => {
        console.log(response.data); // Handle the response from the server

        // Reset the form

        setSelectedImage(null);

        setImages([]);

        setContent("");

        setCategories("");

        setHeading("");
      })

      .catch((error) => {
        console.error(error); // Handle any error that occurred during the request
      });
  };

  return (
    <div>
      <form className="form-container">
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
          ></input>

          <input
            className="heading"
            placeholder="Write Your Heading"
            onChange={handleHeadingChange}
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
          <button className="blog-button" onClick={handlePublish}>
            Publish
          </button>

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
