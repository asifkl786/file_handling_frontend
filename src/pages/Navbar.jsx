import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [downloadDropdown, setDownloadDropdown] = useState(false);
  const [hotelDropdownOpen, setHotelDropdown] = useState(false);

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

          {/* Hotel Dropdown */}
          <div className="relative inline-block">
            <button
              onClick={() => setHotelDropdown(!hotelDropdownOpen)}
              className="text-white hover:text-gray-300 block md:inline-block py-2"
            >
              Hotel 
            </button>
            {hotelDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md">
                <Link
                  //to="/upload/server1"
                  to="/hotel-home"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                >
                  Hotel Home
                </Link>
                <Link
                  to="/hotel/:id"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                >
                  Hotel Details
                </Link>
                <Link
                  to="/image-upload"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                >
                  Server 3
                </Link>
              </div>
            )}
          </div>


          {/* File Upload Dropdown */}
          <div className="relative inline-block">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="text-white hover:text-gray-300 block md:inline-block py-2"
            >
              File Upload ⬇️
            </button>
            {dropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md">
                <Link
                  //to="/upload/server1"
                  to="upload"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                >
                  Server 1
                </Link>
                <Link
                  to="/file-upload"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                >
                  Server 2
                </Link>
                <Link
                  to="/image-upload"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                >
                  Server 3
                </Link>
              </div>
            )}
          </div>

          {/* File Download Dropdown */}
          <div className="relative inline-block">
            <button
              onClick={() => setDownloadDropdown(!downloadDropdown)}
              className="text-white hover:text-gray-300 block md:inline-block py-2"
            >
              File Download ⬇️
            </button>
            {downloadDropdown && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md">
                <Link
                  //to="/upload/server1"
                  to="download"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                >
                  Server 1
                </Link>
                <Link
                  to="/products"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                >
                  Server 2
                </Link>
                <Link
                  to="/file-downloadd"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                >
                  Server 3
                </Link>
                <Link
                  to="/download-file"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                >
                  Server 4
                </Link>
              </div>
            )}
          </div>

          <Link to="/contact" className="text-white hover:text-gray-300 block md:inline-block py-2">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
