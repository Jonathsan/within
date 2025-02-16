export default function Contact() {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Contact Us</h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input type="text" className="w-full p-2 border rounded" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full p-2 border rounded" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea className="w-full p-2 border rounded h-32"></textarea>
                </div>
                <button className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700">
                  Send Message
                </button>
              </form>
            </div>
  
            {/* Contact Info */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Our Information</h2>
              <p className="text-gray-600 mb-2">📞 (123) 456-7890</p>
              <p className="text-gray-600 mb-2">✉️ contact@eshop.com</p>
              <p className="text-gray-600">📍 123 Street Name, City, Country</p>
            </div>
          </div>
        </div>
      </div>
    );
  }