import React, { useState } from "react";
import axios from "axios";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  // Allowed file types
  const ALLOWED_FILE_TYPES = ["image/jpeg", "image/png", "video/mp4", "application/pdf"];

  // Maximum file size (10MB)
  const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    // Validate file type
    if (!ALLOWED_FILE_TYPES.includes(selectedFile.type)) {
      setMessage("File type not allowed. Allowed types: JPEG, PNG, MP4, PDF.");
      return;
    }

    // Validate file size
    if (selectedFile.size > MAX_FILE_SIZE) {
      setMessage("File size exceeds the maximum limit of 10MB.");
      return;
    }

    setFile(selectedFile);
    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setMessage("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("http://localhost:8080/api/v1/files/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setMessage("File uploaded successfully!");
      console.log(response.data);
    } catch (error) {
      setMessage(error.response?.data?.message || "File upload failed!");
      console.error(error);
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="file" onChange={handleFileChange} className="border p-2" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Upload
        </button>
      </form>
      {message && (
        <p className={`mt-4 ${message.includes("successfully") ? "text-green-600" : "text-red-600"}`}>
          {message}
        </p>
      )}
    </div>
  );
};

export default FileUpload;