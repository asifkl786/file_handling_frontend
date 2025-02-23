import React, { useState } from "react";
import axios from "axios";

const FileDownload = () => {
  const [fileId, setFileId] = useState("");
  const [fileData, setFileData] = useState(null);

  const handleDownload = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/files/download/${fileId}`);
      setFileData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Enter File ID"
        value={fileId}
        onChange={(e) => setFileId(e.target.value)}
        className="border p-2"
      />
      <button onClick={handleDownload} className="bg-green-500 text-white px-4 py-2 rounded ml-2">
        Download
      </button>
      {fileData && (
        <div className="mt-4">
          <p>File Name: {fileData.fileName}</p>
          <p>File Type: {fileData.fileType}</p>
          <a href={`http://localhost:8080/api/v1/files/download/{id}/${fileData.fileName}`} download className="text-blue-500">
            Download File
          </a>
        </div>
      )}
    </div>
  );
};

export default FileDownload;