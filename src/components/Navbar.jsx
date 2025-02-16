import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import PropTypes from 'prop-types';
import within from '../assets/within.jpeg'; // ✅ Import the logo

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style ={{backgroundColor: "#8560A8"}}className="rounded-md shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={within} alt="withIN" className="h-10 w-auto mr-2 rounded-md" />  
            <span className="text-2xl font-bold text-white">withIN</span> 
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <NavLink to="/about">About</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/resources">Resources</NavLink>
            <NavLink to="/testimonials">Testimonials</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-indigo-600 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} transition-all duration-300`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
          <MobileNavLink to="/about" onClick={() => setIsOpen(false)}>About</MobileNavLink>
          <MobileNavLink to="/products" onClick={() => setIsOpen(false)}>Products</MobileNavLink>
          <MobileNavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</MobileNavLink>
          <MobileNavLink to="/resources" onClick={() => setIsOpen(false)}>Resources</MobileNavLink>
          <MobileNavLink to="/testimonials" onClick={() => setIsOpen(false)}>Testimonials</MobileNavLink>
        </div>
      </div>
    </nav>
  );
}

// Reusable component for desktop links
const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
  >
    {children}
  </Link>
);

// Reusable component for mobile links
const MobileNavLink = ({ to, children, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="text-gray-600 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium transition-colors"
  >
    {children}
  </Link>
);

// ✅ Define PropTypes
NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

MobileNavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func, // Optional
};
