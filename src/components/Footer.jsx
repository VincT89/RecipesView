import React from 'react';
import { Link } from 'react-router-dom';
import { GiCookingPot } from 'react-icons/gi'; 

const Footer = () => {
  return (
    <footer className="bg-footer text-white py-8 mt-12 w-full">
      <div className="max-w-screen-xl mx-auto px-6">
    
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="text-3xl font-bold text-white">
              Ricettario
            </Link>
            <p className="mt-2 text-center md:text-left text-lg text-gray-400">
              Un mondo di ricette sane e gustose, per ogni momento della giornata.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <GiCookingPot className="text-9xl text-white" />
          </div>
        </div>

        {/* Links di Navigazione (Solo Home e Login) */}
        <div className="flex justify-center space-x-8 mb-6">
          <Link to="/" className="text-gray-400 hover:text-white text-lg">
            Home
          </Link>
          <Link to="login" className="text-gray-400 hover:text-white text-lg">
            Login
          </Link>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 text-xl">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 text-xl">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 text-xl">
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400 w-full py-4 border-t border-gray-600">
          <p>&copy; {new Date().getFullYear()} Ricettario. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
