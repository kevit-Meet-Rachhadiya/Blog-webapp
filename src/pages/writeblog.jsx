import React from "react";
import { useState } from "react";

const writeblog = () => {
  const [selectedImage, setSelectedImage] = useState(null);

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
  return (
    <div>
      <form>
        <div>
          {selectedImage && (
            <div>
              <img src={selectedImage} alt="Selected" />
            </div>
          )}
          {!selectedImage && (
            <div>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default writeblog;
