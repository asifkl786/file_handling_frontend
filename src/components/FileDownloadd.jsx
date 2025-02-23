import { useState, useEffect } from "react";
import { FaFilePdf, FaFileImage, FaFileAlt, FaDownload } from "react-icons/fa";

export default function FileDownload() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    // Fetch files from REST API
    fetch("http://localhost:8080/api/files")
      .then((response) => response.json())
      .then((data) => setFiles(data))
      .catch((error) => console.error("Error fetching files:", error));
  }, []);

  const getFileIcon = (filename) => {
    if (filename.endsWith(".pdf")) return <FaFilePdf className="text-red-500 text-3xl" />;
    if (filename.match(/\.(jpg|jpeg|png|gif)$/)) return <FaFileImage className="text-blue-500 text-3xl" />;
    return <FaFileAlt className="text-gray-500 text-3xl" />;
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h2 className="text-3xl font-semibold text-blue-600 mb-6">Download Files</h2>

      <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-lg">
        {files.length === 0 ? (
          <p className="text-center text-gray-600">No files available</p>
        ) : (
          <ul className="space-y-4">
            {files.map((file) => (
              <li key={file.id} className="flex items-center justify-between p-3 border rounded-md shadow-sm">
                <div className="flex items-center space-x-3">
                  {getFileIcon(file.filename)}
                  <span className="text-gray-700 font-medium">{file.filename}</span>
                </div>

                {/* Preview for images */}
                {file.filename.match(/\.(jpg|jpeg|png|gif)$/) && (
                  <img src={`http://localhost:8080/api/files/preview/${file.id}`} alt="Preview" className="w-16 h-16 object-cover rounded-md border" />
                )}

                {/* Download Button */}
                <a
                  href={`http://localhost:8080/api/files/download/${file.id}`}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-blue-700 transition"
                  download
                >
                  <FaDownload /> <span>Download</span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
