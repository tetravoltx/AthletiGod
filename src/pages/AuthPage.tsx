import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  // Prevent scrolling on the main page when the popup is open
  useEffect(() => {
    document.body.style.overflow = 'hidden'; // Disable scrolling
    return () => {
      document.body.style.overflow = 'auto'; // Re-enable scrolling when unmounted
    };
  }, []);

  console.log(isSignUp); // Debug: Check if state toggles correctly

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      {/* Card Container */}
      <div
        className="relative w-full max-w-md h-[500px]"
        style={{
          perspective: '1000px', // Enable 3D perspective
        }}
      >
        {/* Card */}
        <div
          className={`absolute inset-0 transition-transform duration-700 transform ${
            isSignUp ? 'rotate-y-180' : ''
          }`}
          style={{
            transformStyle: 'preserve-3d', // Preserve 3D effect
          }}
        >
          {/* Front Side (Login Form) */}
          <div
            className="absolute inset-0 bg-white rounded-lg shadow-lg p-8 flex flex-col justify-center"
            style={{
              backfaceVisibility: 'hidden', // Hide back side when not visible
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => navigate('/')} // Navigate back to the home page
              className="absolute top-4 right-4 text-gray-500 hover:text-red-600 transition"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Login</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-lg bg-black text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 border rounded-lg bg-black text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-red-800 text-white py-2 rounded-lg hover:scale-105 hover:shadow-[0_0_20px_rgba(255,0,0,0.6)] transition-transform duration-300"
              >
                Login
              </button>
            </form>
            <p className="text-gray-600 mt-4 text-center">
              Don't have an account?{' '}
              <button
                type="button"
                onClick={() => setIsSignUp(true)} // Toggle to Sign Up
                className="text-red-600 hover:underline"
              >
                Sign up now
              </button>
            </p>
          </div>

          {/* Back Side (Sign Up Form) */}
          <div
            className="absolute inset-0 bg-white rounded-lg shadow-lg p-8 flex flex-col justify-center transform rotate-y-180"
            style={{
              backfaceVisibility: 'hidden', // Hide front side when not visible
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => navigate('/')} // Navigate back to the home page
              className="absolute top-4 right-4 text-gray-500 hover:text-red-600 transition"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Sign Up</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-lg bg-black text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 border rounded-lg bg-black text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="Enter your password"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="confirm-password" className="block text-gray-700 font-medium mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  className="w-full px-4 py-2 border rounded-lg bg-black text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="Confirm your password"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-red-800 text-white py-2 rounded-lg hover:scale-105 hover:shadow-[0_0_20px_rgba(255,0,0,0.6)] transition-transform duration-300"
              >
                Sign Up
              </button>
            </form>
            <p className="text-gray-600 mt-4 text-center">
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => setIsSignUp(false)} // Toggle to Login
                className="text-red-600 hover:underline"
              >
                Login
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}