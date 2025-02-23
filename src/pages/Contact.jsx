import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8 md:flex md:space-x-8">
        
        {/* Contact Information */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-semibold text-blue-600">Get in Touch 📩</h2>
          <p className="text-gray-600 mt-2">We’d love to hear from you! Reach out for any queries.</p>
          
          <div className="mt-6 space-y-4">
            <p className="text-gray-700"><strong>📍 Address:</strong> 123 Tech Street, Silicon Valley</p>
            <p className="text-gray-700"><strong>📞 Phone:</strong> +1 234 567 890</p>
            <p className="text-gray-700"><strong>📧 Email:</strong> contact@filemanager.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:w-1/2 mt-6 md:mt-0">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
            >
              Send Message 🚀
            </button>
          </form>

          {submitted && (
            <p className="mt-4 text-green-600 text-center">Message Sent Successfully! ✅</p>
          )}
        </div>
      </div>
    </div>
  );
}
