import React from 'react';

export default function Pricing() {
  return (
    <div className="min-h-screen bg-brand-dark py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Choose Your Plan</h1>
          <p className="text-xl text-gray-300">
            We’re here to help athletes achieve their goals. Pick the plan that works best for you.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Basic Plan */}
          <div className="bg-black bg-opacity-40 rounded-lg p-8 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,0,0,0.6)]">
            <h2 className="text-3xl font-bold text-white mb-4">Basic Plan</h2>
            <p className="text-5xl font-bold text-brand-red mb-4">$0</p>
            <p className="text-gray-300 mb-6">
              Perfect for athletes just starting out. Get access to:
            </p>
            <ul className="text-gray-300 text-left mb-6 space-y-2">
              <li>✔️ Access to beginner-level tutorials</li>
              <li>✔️ Community support to connect with other athletes</li>
              <li>✔️ Step-by-step guides to improve your fundamentals</li>
              <li>✔️ Free resources to help you train effectively</li>
            </ul>
            <button className="bg-gradient-to-r from-red-600 to-red-800 text-white px-8 py-3 rounded-full hover:opacity-90 transition">
              Get Started
            </button>
          </div>

          {/* Premium Plan */}
          <div className="bg-black bg-opacity-40 rounded-lg p-8 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,0,0,0.6)]">
            <h2 className="text-3xl font-bold text-white mb-4">Premium Plan</h2>
            <p className="text-5xl font-bold text-brand-red mb-4">$19.99</p>
            <p className="text-gray-300 mb-6">
              Designed for athletes who want to take their skills to the next level. Includes:
            </p>
            <ul className="text-gray-300 text-left mb-6 space-y-2">
              <li>✔️ Access to all tutorials, including advanced techniques</li>
              <li>✔️ Personalized training plans tailored to your goals</li>
              <li>✔️ One-on-one coaching sessions with professional trainers</li>
              <li>✔️ Exclusive resources and tools to track your progress</li>
            </ul>
            <button className="bg-gradient-to-r from-red-600 to-red-800 text-white px-8 py-3 rounded-full hover:opacity-90 transition">
              Get Started
            </button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-white mb-4">Not Sure Where to Start?</h2>
          <p className="text-gray-300 text-lg mb-6">
            Whether you’re just starting out or looking to take your skills to the next level, AthletiGod is here to help.
          </p>
          <button className="bg-gradient-to-r from-red-600 to-red-800 text-white px-8 py-3 rounded-full text-lg font-semibold hover:scale-105 hover:shadow-[0_0_20px_rgba(255,0,0,0.6)] transition-transform duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}