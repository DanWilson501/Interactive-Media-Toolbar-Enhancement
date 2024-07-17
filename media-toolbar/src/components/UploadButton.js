import React, { useState } from 'react';
import './UploadButton.css';

const UploadButton = () => {
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target.result);
        alert('Image uploaded successfully!');
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="upload-button">
      <input type="file" onChange={handleImageUpload} />
      {uploadedImage && (
        <div>
          <img src={uploadedImage} alt="Uploaded" className="uploaded-image" />
        </div>
      )}
    </div>
  );
};

export default UploadButton;
