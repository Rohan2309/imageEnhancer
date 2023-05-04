import React, { useState } from 'react';
import "./imageDrop.css";
function FileUpload(props) {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('file', file);
    props.onFileUpload(formData);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default FileUpload;
/*
import React, { useState } from 'react';

function ImageUploader(props) {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [resultImage, setResultImage] = useState(null);

  const handleUpload = (event) => {
    const file = event.target.files[0];
    setUploadedImage(URL.createObjectURL(file));
    props.onFileUpload(file)
      .then(result => {
        setResultImage(URL.createObjectURL(result));
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="image-uploader">
      <div className="uploaded-image">
        {uploadedImage && <img src={uploadedImage} alt="Uploaded Image" />}
      </div>
      <div className="result-image">
        {resultImage && <img src={resultImage} alt="Result Image" />}
      </div>
      <div className="upload-button">
        <input type="file" accept="image/*" onChange={handleUpload} />
      </div>
    </div>
  );
}

export default ImageUploader;

*/