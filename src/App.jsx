import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import FileUpload from "./components/FileUpload";
import FileDownload from "./components/FileDownload";
import FileAndImageUpload from "./components/FileAndImageUpload";
import Products from "./pages/Products";
import ImageUpload from "./pages/ImageUpload";
import FileDownloadd from "./components/FileDownloadd";
import DownloadFile from "./components/DownloadFile";
import HotelHome from "./components/HotelHome";
import HotelDetails from "./components/HotelDetails";

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotel-home" element={<HotelHome />} />
          <Route path="/hotel/:id" element={<HotelDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/upload" element={<FileUpload />} />
          <Route path="/image-upload" element={<ImageUpload />} />
          <Route path="/download" element={<FileDownload />} />
          <Route path="/file-downloadd" element={<FileDownloadd />} />
          <Route path="/download-file" element={<DownloadFile />} />
          <Route path="/file-upload" element={<FileAndImageUpload />} />
          <Route path="/products" element={<Products />} />

        </Routes>
      </div>
    </Router>
  );
}
