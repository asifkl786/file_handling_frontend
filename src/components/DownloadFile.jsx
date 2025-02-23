import { useState } from "react";
import { FiDownload, FiFileText } from "react-icons/fi";

export default function FileDownload() {
  const [fileId, setFileId] = useState("");
  const [fileData, setFileData] = useState(null);
  const [loading, setLoading] = useState(false);

  const BASE_URL = "http://localhost:8080/api/v2/files/fileSystem"; // Backend API URL

  const fetchFile = async () => {
    if (!fileId) return alert("Please enter a file ID!");
    setLoading(true);

    try {
      const response = await fetch(`${BASE_URL}/${fileId}`);
      if (!response.ok) throw new Error("File not found!");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const filenameHeader = response.headers.get("Content-Disposition");
      let filename = "downloaded_file"; // Default filename

      if (filenameHeader && filenameHeader.includes("filename=")) {
        filename = filenameHeader.split("filename=")[1].replace(/['"]+/g, "");
      }

      setFileData({
        id: fileId,
        name: filename.replace(/['"]+/g, ""),
        type: blob.type,
        url,
      });

    } catch (error) {
      alert(error.message);
      setFileData(null);
    }
    setLoading(false);
  };

  const downloadFile = () => {
    if (fileData) {
      const link = document.createElement("a");
      link.href = fileData.url;
      link.download = fileData.name;
      link.click();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h2 className="text-3xl font-semibold text-blue-600 mb-6">Download Your File</h2>

      {/* ID Input */}
      <div className="flex space-x-4">
        <input
          type="text"
          placeholder="Enter File ID"
          value={fileId}
          onChange={(e) => setFileId(e.target.value)}
          className="p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={fetchFile}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Fetch File 🔍
        </button>
      </div>

      {/* File Preview Table */}
      {fileData && (
        <div className="mt-6 bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">File Details 📄</h3>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">ID</th>
                <th className="border p-2">Name</th>
                <th className="border p-2">Type</th>
                <th className="border p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2 text-center">{fileData.id}</td>
                <td className="border p-2 text-center">{fileData.name}</td>
                <td className="border p-2 text-center">{fileData.type}</td>
                <td className="border p-2 text-center">
                  <button
                    onClick={downloadFile}
                    className="bg-green-500 text-white p-2 rounded-md flex items-center justify-center hover:bg-green-600 transition"
                  >
                    <FiDownload className="mr-1" /> Download
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {/* Loading Indicator */}
      {loading && <p className="mt-4 text-blue-600">Loading file... ⏳</p>}
    </div>
  );
}
