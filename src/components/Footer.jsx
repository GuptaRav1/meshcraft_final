import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-10 text-white bg-gray-900 mt-28">
      <div className="container flex flex-wrap items-start justify-around mx-auto space-y-8 md:space-y-0">
        {/* Company Info */}
        <div className="w-full px-4 md:w-1/3">
          <h2 className="text-2xl font-bold">Meshcraft</h2>
          <p className="mt-4 text-gray-400">
            Innovative solutions for a connected world. At Meshcraft, we craft the future of technology, one mesh at a time.
          </p>
        </div>

        {/* Quick Links */}
        <div className="w-full px-4 md:w-1/3">
          <h4 className="mb-4 text-xl">Quick Links</h4>
          <ul>
            <li className="mb-2">
              <a href="#about" className="transition-colors duration-300 hover:text-gray-300">About Us</a>
            </li>
            <li className="mb-2">
              <a href="#services" className="transition-colors duration-300 hover:text-gray-300">Services</a>
            </li>
            <li className="mb-2">
              <a href="#contact" className="transition-colors duration-300 hover:text-gray-300">Contact Us</a>
            </li>
            <li className="mb-2">
              <a href="#careers" className="transition-colors duration-300 hover:text-gray-300">Careers</a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="w-full px-4 md:w-1/3">
          <h4 className="mb-4 text-xl">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="text-2xl transition-colors duration-300 hover:text-blue-500">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" className="text-2xl transition-colors duration-300 hover:text-blue-400">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" className="text-2xl transition-colors duration-300 hover:text-blue-600">
              <FaLinkedin />
            </a>
            <a href="https://instagram.com" className="text-2xl transition-colors duration-300 hover:text-pink-500">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="pt-6 mt-10 text-center border-t border-gray-700">
        <p className="text-gray-500">&copy; {new Date().getFullYear()} Meshcraft. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
