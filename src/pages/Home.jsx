export default function Home() {
    return (
      <div className="min-h-screen bg-gray-100">
        {/* Hero Section */}
        <header className="bg-blue-600 text-white py-20 text-center">
          <h1 className="text-4xl font-bold">Welcome to FileManager 📂</h1>
          <p className="mt-4 text-lg">Easily upload, download, and manage your files with ease.</p>
          <a 
            href="/upload"
            className="mt-6 inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-200 transition"
          >
            Get Started 🚀
          </a>
        </header>
  
        {/* Features Section */}
        <section className="container mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Why Choose FileManager?</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600">📤 Easy Uploads</h3>
              <p className="text-gray-600 mt-2">Upload files securely and quickly.</p>
            </div>
  
            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600">📥 Fast Downloads</h3>
              <p className="text-gray-600 mt-2">Retrieve your files anytime, anywhere.</p>
            </div>
  
            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600">🔒 Secure Storage</h3>
              <p className="text-gray-600 mt-2">Your files are safe and encrypted.</p>
            </div>
          </div>
        </section>
  
        {/* Call to Action */}
        <section className="bg-blue-600 text-white py-12 text-center">
          <h2 className="text-2xl font-semibold">Start Managing Your Files Today!</h2>
          <a 
            href="/upload"
            className="mt-4 inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-200 transition"
          >
            Upload Now 🚀
          </a>
        </section>
      </div>
    );
  }
  