import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import "../Css/Writeblog.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Writeblog = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [heading, setHeading] = useState("");
  const fileInputRef = useRef(null);
  const imageInputRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleImageClick = (event) => {
    event.preventDefault();
    imageInputRef.current.click();
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setSelectedImage(imageUrl);
  };

  const handleUploadToTextArea = (event) => {
    event.preventDefault();
    fileInputRef.current.click();
  };

  const handleFileSelect = (event) => {
    const uploadedImages = Array.from(event.target.files);
    const imageUrls = uploadedImages.map((image) => URL.createObjectURL(image));
    setImages((prevImages) => [...prevImages, ...imageUrls]);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleHeadingChange = (event) => {
    setHeading(event.target.value);
  };

  const resetForm = () => {
    setSelectedImage(null);
    setImages([]);
    setContent("");
    setCategory("");
    setHeading("");
  };

  const handlePublish = (event) => {
    event.preventDefault();
    if (!selectedImage || !category || !heading || !content || !images) {
      toast.error("Please fill all the fields");

      return;
    }

    const formData = {
      coverimage: selectedImage,
      categories: category,
      headings: heading,
      contents: content,
      blogimage: images,
    };

    const config = {
      method: "POST",
      url: "http://192.168.1.150:1234/api/blogs/addblog",
      headers: {
        "content-type": "application/json",
      },
      data: formData,
    };
    axios(config)
      .then((response) => {
        if (response.status === 200) {
          // console.log(formData);
          // dispatch(blogPostShow(response.data));
          resetForm();
          toast.success("Blog post created successfully!");
        }
      })
      .catch((error) => {
        console.error("Error creating blog post", error);
        toast.error("Error creating blog post");
      });
  };

  const generateImageTags = () => {
    return images.map((imageUrl, index) => (
      <img
        key={index}
        src={imageUrl}
        alt="upload-images"
        width="200px"
        height="200px"
      />
    ));
  };

  return (
    <div>
      <form className="form-containers" onSubmit={handlePublish}>
        {selectedImage && (
          <div>
            <img src={selectedImage} alt="Selected" id="blogimg" />
          </div>
        )}
        {!selectedImage && (
          <div className="uploaditem">
            <h4>Select Cover Image</h4>
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
            placeholder="Write Your Category (eg. Art, Nature, Car...)"
            value={category}
            onChange={handleCategoryChange}
          />
          <input
            className="heading"
            placeholder="WRITE YOUR HEADING"
            value={heading}
            onChange={handleHeadingChange}
          />
          <textarea
            name="content"
            className="blog-content"
            placeholder="WRITE CONTENT ABOUT YOUR BLOG"
            onChange={handleContentChange}
            value={content}
          />
        </div>
        <div className="generateblogimg">{generateImageTags()}</div>
        <div className="btn-container">
          <button className="blog-button" type="submit">
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
        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover
          theme="colored"
        />
      </form>
    </div>
  );
};

export default Writeblog;
