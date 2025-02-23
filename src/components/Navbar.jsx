import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-white text-xl font-bold">
          FileManager
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="text-white md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Navbar Links */}
        <div className={`md:flex space-x-6 ${isOpen ? "block" : "hidden"} w-full md:w-auto md:items-center`}>
          <Link to="/" className="text-white hover:text-gray-300 block md:inline-block py-2">
            Home
          </Link>
          <Link to="/contact" className="text-white hover:text-gray-300 block md:inline-block py-2">
            Contact
          </Link>
          <Link to="/upload" className="text-white hover:text-gray-300 block md:inline-block py-2">
            File Upload
          </Link>
          <Link to="/download" className="text-white hover:text-gray-300 block md:inline-block py-2">
            File Download
          </Link>
          <Link to="/file-upload" className="text-white hover:text-gray-300 block md:inline-block py-2">
            File Uplaod
          </Link>
        </div>
      </div>
    </nav>
  );
}
