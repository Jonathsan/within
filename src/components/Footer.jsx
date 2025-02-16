import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer style ={{backgroundColor: "#8560A8"}} className="text-white pt-12 rounded-md">
      <div className="w-full px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* About Section */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">withIN</h3>
            <p className="text-black">
              Your one-stop destination for quality products. We deliver excellence straight to your doorstep.
            </p>
          </div>

          {/* Quick Links */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-[#CDAEAE] hover:text-indigo-500 transition">About Us</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-indigo-500 transition">Products</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-indigo-500 transition">Contact</Link></li>
              <li><Link to="/testimonials" className="text-gray-400 hover:text-indigo-500 transition">Testimonials</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="text-black space-y-2">
              <li>📞 (123) 456-7890</li>
              <li>✉️ support@withIN.com</li>
              <li>📍 123 Street Name, City, Country</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <form className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-indigo-500"
              />
              <button 
                type="submit"
                className="bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
              >
                Subscribe
              </button>
            </form>
            
            {/* Social Media */}
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-indigo-500">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-500">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-500">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-500">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 py-6 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} withIN. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}