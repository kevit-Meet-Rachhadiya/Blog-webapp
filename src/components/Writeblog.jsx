import React, { useState, useRef } from "react";
import axios from "axios";
import "../Css/Writeblog.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
<<<<<<< HEAD
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
=======
import { useDispatch } from "react-redux";
import { blogPostShow } from "./Slice/BlogSlice";
>>>>>>> 308df2986003b33fde08d0223a8f160e65618f3a

const Writeblog = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [heading, setHeading] = useState("");
  const fileInputRef = useRef(null);
  const imageInputRef = useRef(null);
  const dispatch = useDispatch();

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

<<<<<<< HEAD
  const handlePublish = (event) => {
    event.preventDefault();

    if (!selectedImage || !category || !heading || !content) {
      toast.error("Please fill all the fields!");
      return;
    }

    const formData = new FormData();
    formData.append("coverimage", selectedImage);
    formData.append("categories", category);
    formData.append("headings", heading);
    formData.append("contents", content);
    images.forEach((image, index) => {
      formData.append(`blogimage${index}`, image);
    });

    axios
      .post("http://192.168.1.120:1234/api/blogs/addblog", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setSelectedImage(null);
          setImages([]);
          setContent("");
          setCategory("");
          setHeading("");
          toast.success("Blog Created Successfully!");
          console.log(formData);
        } else {
          toast.error("Error creating blog post");
=======
  const resetForm = () => {
    setSelectedImage(null);
    setImages([]);
    setContent("");
    setCategory("");
    setHeading("");
    // fileInputRef.current.value = "";
    // imageInputRef.current.value = "";
  };

  const handlePublish = (event) => {
    event.preventDefault();

    const formData = {
      coverimage: selectedImage,
      categories: category,
      headings: heading,
      contents: content,
      blogimage: {}
    };

    images.forEach((images, index) => {
      return (formData.blogimage[`image${index + 1}`] = images);
    });

    const config = {
      method: "POST",
      url: "http://192.168.1.120:1234/api/blogs/addblog",
      headers: {
        "content-type": "application/json",
      },
      data: formData,
    };
    axios(config)
      .then((response) => {
        if (response.status === 200) {
          console.log(formData);
          dispatch(blogPostShow(response.data))
          resetForm();
>>>>>>> 308df2986003b33fde08d0223a8f160e65618f3a
        }
      })
      .catch((error) => {
        console.error("Error creating blog post", error);
<<<<<<< HEAD
        toast.error("Error creating blog post");
=======
>>>>>>> 308df2986003b33fde08d0223a8f160e65618f3a
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
      <form className="form-containers" onSubmit={handlePublish}>
        {selectedImage && (
          <div>
            <img src={selectedImage} alt="Selected" id="blogimg" />
          </div>
        )}
        {!selectedImage && (
          <div className="uploaditem">
<<<<<<< HEAD
            <p>Select Cover Image</p>
=======
            <p>Select Your Image</p>

>>>>>>> 308df2986003b33fde08d0223a8f160e65618f3a
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
<<<<<<< HEAD
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
=======
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
>>>>>>> 308df2986003b33fde08d0223a8f160e65618f3a
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
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </form>
    </div>
  );
};

export default Writeblog;
