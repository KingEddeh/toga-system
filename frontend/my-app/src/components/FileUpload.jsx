import React, { useState } from "react";
import { Button, Box } from "@mui/material";

const FileUpload = ({ onUploadSuccess }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://127.0.0.1:8000/customer/import/", {
        method: "POST",
        body: formData,
      });
      const responseData = await response.json();
      console.log(responseData);

      if (response.ok) {
        alert("File uploaded successfully!");
        setFile(null); // Reset file input
        if (onUploadSuccess) onUploadSuccess();
      } else {
        alert("Failed to upload file.");
      }
    } catch (error) {
      console.error("Upload error:", error);
      alert("An error occurred while uploading.");
    }
  };

  return (
    <Box display="flex" gap={2} alignItems="center">
      <input type="file" onChange={handleFileChange} />
      <Button variant="contained" color="primary" onClick={handleUpload}>
        Upload File
      </Button>
    </Box>
  );
};

export default FileUpload;
