import { useState } from "react";

export default function ImageUpload() {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Image Uploaded Successfully!");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h2 className="text-2xl font-semibold text-blue-600 mb-6">Upload & Preview Image</h2>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg text-center w-96">
        {/* Image Preview Circle */}
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden border">
            {image ? <img src={image} alt="Preview" className="w-full h-full object-cover" /> : <span className="text-gray-400">No Image</span>}
          </div>
        </div>

        {/* Name Input */}
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 mt-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        {/* File Input */}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full p-2 mt-4 border rounded-md cursor-pointer"
          required
        />

        {/* Upload Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md mt-4 hover:bg-blue-700 transition"
        >
          Upload 🚀
        </button>
      </form>

      {/* Display Name */}
      {name && (
        <div className="mt-6 text-xl font-semibold text-gray-700">{name}</div>
      )}
    </div>
  );
}
