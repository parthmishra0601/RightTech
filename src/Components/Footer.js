import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-8 mt-12">
      <div className="max-w-screen-xl mx-[40px]">
        <div className="flex justify-between items-center">
          {/* Left Side: Company Information or Logo */}
          <div>
            <h2 className="text-2xl font-bold cursor-pointer">Right Technologies</h2>
            <p className="text-sm mt-2">Consultants Private Limited</p>
          </div>

          {/* Right Side: Navigation Links */}
          <div className="flex space-x-6 text-xl">
            <Link to="/" className="hover:text-gray-400">Home</Link>
            <Link to="/services" className="hover:text-gray-400">Services</Link>
            <Link to="/about" className="hover:text-gray-400">About</Link>
            <Link to="/team" className="hover:text-gray-400">Team</Link>
            <Link to="/collaborations" className="hover:text-gray-400">Collaborations</Link>
            <Link to="/associates" className="hover:text-gray-400">Associates</Link>
            <Link to="/contact" className="hover:text-gray-400">Contact</Link>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Right Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
