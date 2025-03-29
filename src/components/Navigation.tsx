import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const location = useLocation();

  return (
    <nav className="sticky top-0 w-full py-6 px-8 z-50 bg-black bg-opacity-70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/KobeBryant-Hybrid.png"
            alt="AthletiGod Logo"
            className="h-10 hover:scale-110 transition-transform duration-300"
          />
          <span className="text-white text-2xl font-bold font-sans">AthletiGod</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          {['/', '/tutorials', '/pricing', '/about'].map((path) => (
            <Link
              key={path}
              to={path}
              className={`text-white hover:text-brand-red transition-colors duration-300 font-sans ${
                location.pathname === path ? 'font-semibold text-brand-red' : ''
              }`}
            >
              {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
            </Link>
          ))}
        </div>

        {/* Login/Sign Up Button */}
        <Link
          to="/auth"
          className="bg-gradient-to-r from-red-600 to-red-800 text-white px-6 py-2 rounded-full hover:scale-105 hover:shadow-[0_0_20px_rgba(255,0,0,0.6)] transition-transform duration-300 font-sans"
        >
          Login / Sign Up
        </Link>
      </div>
    </nav>
  );
}