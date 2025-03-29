import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-brand-dark py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex flex-col items-center space-y-6">
            {/* Enlarged Logo */}
            <img
              src="/KobeBryant-Hybrid.png"
              alt="AthletiGod Logo"
              className="h-40 md:h-48 hover:scale-110 transition-transform duration-300"
            />
            <h1 className="text-5xl font-bold text-white animate-fade-in">About AthletiGod</h1>
          </div>
          <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto animate-fade-in">
            Love the grind or leave the game. Empowering athletes worldwide with free, high-quality sports tutorials.
          </p>
        </div>

        {/* Logo Meaning Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-6 text-center animate-slide-up">The Meaning Behind the Logo</h2>
          <div className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
            <p className="mb-4 animate-fade-in">
              The iconic geometric emblem of Kobe Bryant has a hidden meaning. As Kobe once explained, the logo represents a **sword in a sheath**. The sword symbolizes raw talent, while the sheath represents the effort and training required to refine and elevate that talent.
            </p>
            <p className="mb-4 animate-fade-in">
              The emblem also draws inspiration from **Japanese samurai culture**, reflecting the balance, discipline, and dedication that Kobe embodied throughout his career. Designed by Eric Avar, the logo captures the essence of hard work and the relentless pursuit of greatness.
            </p>
            <p className="italic text-center text-gray-400 animate-fade-in">
              "The sword is the raw talent, and the sheath is the effort you put into developing it." – Kobe Bryant
            </p>
          </div>
        </div>

        {/* Our Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          {/* Image Section */}
          <div className="relative">
            <img
              src="/image_football.jpg"
              alt="Football Our Mission"
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-dark to-transparent opacity-30 rounded-lg"></div>
          </div>

          {/* Text Section */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-6 animate-slide-up">Our Mission</h2>
            <p className="text-gray-300 text-lg leading-relaxed animate-fade-in">
              AthletiGod was created for athletes who love the game but don't have access to professional coaching. 
              We know what it's like to want to improve but face obstacles - whether it's cost, location, or lack of resources. 
              That's why we've built a platform offering completely free, high-quality sports tutorials.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mt-4 animate-fade-in">
              Our mission is simple: to make sports education accessible to all. No paywalls. No memberships. 
              Just clear, step-by-step training guides to help you develop your skills at your own pace. 
              From basketball fundamentals to advanced techniques, we break down each movement so you can train effectively, even if you're practicing alone.
            </p>
          </div>
        </div>

        {/* Our Story Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6 animate-slide-up">Our Story</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-4 animate-fade-in">
              AthletiGod is more than just a website - it's a movement to democratize sports knowledge. 
              We believe talent exists everywhere, but opportunity doesn't. By providing free, structured training, 
              we're helping dedicated athletes everywhere get closer to their potential.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed italic animate-fade-in">
              "Hard work beats talent when talent doesn't work hard."
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&q=80"
              alt="Athletes training together on a field"
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-dark to-transparent opacity-30 rounded-lg"></div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-12 text-center animate-slide-up">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Excellence */}
            <div className="text-center animate-fade-in">
              <div className="bg-brand-red bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-brand-red"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Excellence</h3>
              <p className="text-gray-300">
                Committed to delivering the highest quality sports education.
              </p>
            </div>

            {/* Passion */}
            <div className="text-center animate-fade-in">
              <div className="bg-brand-red bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-brand-red"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Passion</h3>
              <p className="text-gray-300">
                Driven by our love for sports and athlete development.
              </p>
            </div>

            {/* Results */}
            <div className="text-center animate-fade-in">
              <div className="bg-brand-red bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-brand-red"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 17l3-3 7 7H5v-2h4zm3-12c-4.97 0-9 4.03-9 9 0 1.64.44 3.17 1.21 4.5L1 21l3.5-1.21C6.83 20.56 8.36 21 10 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7-7-3.13 7-7 7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Results</h3>
              <p className="text-gray-300">
                Focused on helping athletes achieve their goals.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6 animate-slide-up">Start Your Journey Today</h2>
          <p className="text-gray-300 text-lg mb-8 animate-fade-in">
            The court is yours. Join AthletiGod and take your skills to the next level.
          </p>
          <button className="bg-gradient-to-r from-red-600 to-red-800 text-white px-8 py-3 rounded-full text-lg font-semibold hover:scale-105 hover:shadow-[0_0_20px_rgba(255,0,0,0.6)] transition-transform duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}