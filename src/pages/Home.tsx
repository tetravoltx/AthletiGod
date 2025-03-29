import React from 'react';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/guy-stance-dark-room.jpg')" }}
      >
        {/* Vignette Effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70"></div>

        {/* Centered Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Love the Grind or Leave the Game</h1>
          <p className="text-xl text-gray-300 mb-8">
            Learn from professional athletes and certified coaches through high-quality video tutorials.
          </p>
          <button className="bg-gradient-to-r from-red-600 to-red-800 text-white px-8 py-3 rounded-full text-lg font-semibold hover:scale-105 hover:shadow-[0_0_20px_rgba(255,0,0,0.6)] transition-transform duration-300">
            Get Started
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Why Choose AthletiGod</h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            Everything you need to excel in your chosen sport.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Expert Coaches</h3>
              <p className="text-gray-600">
                Learn from professional athletes and certified coaches with years of experience.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Comprehensive Tutorials</h3>
              <p className="text-gray-600">
                Access high-quality video tutorials and step-by-step guides for all skill levels.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Personalized Plans</h3>
              <p className="text-gray-600">
                Get personalized training plans tailored to your goals and progress.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Join AthletiGod today and take your skills to the next level.
          </p>
          <button className="bg-gradient-to-r from-red-600 to-red-800 text-white px-8 py-3 rounded-full text-lg font-semibold hover:scale-105 hover:shadow-[0_0_20px_rgba(255,0,0,0.6)] transition-transform duration-300">
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
}