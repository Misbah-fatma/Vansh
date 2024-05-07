import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileUpload, faSpinner } from '@fortawesome/free-solid-svg-icons';
import '../App.css'; // Import your CSS file for styling

const FileUploadCard = () => {
  return (
    <div className="container1">
      <div className="row1">
        <div className="card1">
          <div className="card-body">
            <FontAwesomeIcon icon={faFileUpload} className="upload-icon" style={{height : "200px"}} />
            <h5 className="card-title">File Uploaded Successfully!</h5>
            <p className="card-text">
              Your file has been successfully uploaded. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
            </p>
          </div>
        </div>
        <div className="card1">
          <div className="card-body">
            <FontAwesomeIcon icon={faSpinner} className="upload-icon spinner" style={{height : "200px"}}/>
            <h5 className="card-title">Uploading...</h5>
            <p className="card-text">
              Please wait while your file is being uploaded. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUploadCard;
