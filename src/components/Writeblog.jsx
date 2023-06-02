import React, { useState, useRef } from "react";
import axios from "axios";
import "../Css/Writeblog.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";

const Writeblog = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [heading, setHeading] = useState("");
  const fileInputRef = useRef(null);
  const imageInputRef = useRef(null);

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

  const handlePublish = (event) => {
    event.preventDefault();

    const formData = {
      coverimage: selectedImage,
      categories: category,
      headings: heading,
      contents: content,
      blogimage: {},
    };

    images.forEach((images, index) => {
     return formData.blogimage[`image${index + 1}`] = images;
    });

    console.log(formData);

    const config = {
      method: "POST",
      url: "http://192.168.1.90:1234/api/blogs/addblog",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    };
    axios(config)
      .then((response) => {
        if (response.ok) {
          // setPost(response.data)
          setSelectedImage(null);
          setImages([]);
          setContent("");
          setCategory("");
          setHeading("");
        } else {
          console.error("Error creating blog post");
        }
      })
      .catch((error) => {
        console.error("Error creating blog post", error);
      });
  };

  // console.log(post)

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
      <form className="form-container" onSubmit={handlePublish}>
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
            value={category}
            onChange={handleCategoryChange}
          ></input>
          <input
            className="heading"
            placeholder="Write Your Heading"
            value={heading}
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
      </form>
    </div>
  );
};

export default Writeblog;
