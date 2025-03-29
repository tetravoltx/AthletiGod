import React from 'react';
import { Instagram, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Logo and Slogan */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="/KobeBryant-Hybrid.png"
                alt="AthletiGod Logo"
                className="h-12 hover:scale-110 transition-transform duration-300"
              />
              <span className="text-2xl font-bold tracking-wide">AthletiGod</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Love the grind or leave the game. Your ultimate platform for mastering sports and fitness.
            </p>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b-2 border-red-600 inline-block pb-2">
              Follow Us
            </h4>
            <p className="text-gray-400 mb-4">
              Stay connected with us on social media for the latest updates.
            </p>
            <div className="flex space-x-6">
              {/* Instagram */}
              <a
                href="#"
                className="hover:shadow-[0_0_15px_rgba(255,0,0,0.8)] border border-transparent rounded-full p-2 transition-transform duration-300 hover:scale-110"
              >
                <Instagram className="w-6 h-6" />
              </a>

              {/* TwitterX Logo */}
              <a
                href="#"
                className="hover:shadow-[0_0_15px_rgba(255,0,0,0.8)] border border-transparent rounded-full p-2 transition-transform duration-300 hover:scale-110"
              >
                <img
                  src="/TwitterX.png"
                  alt="TwitterX Logo"
                  className="w-6 h-6"
                />
              </a>

              {/* Facebook */}
              <a
                href="#"
                className="hover:shadow-[0_0_15px_rgba(255,0,0,0.8)] border border-transparent rounded-full p-2 transition-transform duration-300 hover:scale-110"
              >
                <Facebook className="w-6 h-6" />
              </a>

              {/* YouTube */}
              <a
                href="#"
                className="hover:shadow-[0_0_15px_rgba(255,0,0,0.8)] border border-transparent rounded-full p-2 transition-transform duration-300 hover:scale-110"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b-2 border-red-600 inline-block pb-2">
              Newsletter
            </h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to stay updated on the latest tutorials and offers.
            </p>
            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-red-600 to-red-800 text-white px-6 py-2 rounded-lg hover:scale-105 hover:shadow-[0_0_20px_rgba(255,0,0,0.6)] transition-transform duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} AthletiGod. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}