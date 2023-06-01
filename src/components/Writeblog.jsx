import React, { useState, useRef } from "react";
import "../CSS /Writeblog.css";
// import uploadimg from "../Assest/upload.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";


const Writeblog = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);
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
      <form className="form-container">
        {selectedImage && (
          <div>
            <img src={selectedImage} alt="Selected" id="blogimg" />
          </div>
        )}
        {!selectedImage && (
          <div className="uploaditem">
            <p>Select Your Image</p>
            
               <FontAwesomeIcon className="uploadicon" onClick={handleImageClick} icon={faCloudArrowUp} fade beat/>
            
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
          <input className="category" placeholder="Write Your Category"></input>
          <input className="heading" placeholder="Write Your Heading"></input>
          <textarea
            name="content"
            className="blog-content"
            placeholder="Write Your Content About Your Blog"
            onChange={handleContentChange}
            value={content}></textarea>
        </div>
        <div className="generateblogimg" >{generateImageTags()}</div>
        <div className="btn-container">
          <button className="blog-button">Publish</button>
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
