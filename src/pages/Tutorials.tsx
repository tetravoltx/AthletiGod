const tutorials = [
  {
    sport: 'Basketball',
    description: 'Master basketball fundamentals, from dribbling to advanced shooting techniques.',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80',
    levels: ['Beginner', 'Intermediate', 'Advanced'],
  },
  {
    sport: 'Soccer',
    description: 'Learn professional soccer skills, tactics, and game strategies.',
    image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&q=80',
    levels: ['Beginner', 'Intermediate', 'Advanced'],
  },
  {
    sport: 'Tennis',
    description: 'Develop your tennis game with expert coaching and proven techniques.',
    image: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&q=80',
    levels: ['Beginner', 'Intermediate', 'Advanced'],
  },
];

export default function Tutorials() {
  return (
    <div className="min-h-screen bg-brand-dark py-20">
      <div className="max-w-7xl mx-auto px-4 pt-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Sports Tutorials</h1>
          <p className="text-xl text-gray-300">Love the grind or leave the game</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tutorials.map((tutorial) => (
            <div
              key={tutorial.sport}
              className="bg-black bg-opacity-40 rounded-lg overflow-hidden border-2 border-transparent hover:border-brand-red transform transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,0,0,0.6)]"
            >
              <div className="relative">
                <img
                  src={tutorial.image}
                  alt={tutorial.sport}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">{tutorial.sport} Fundamentals</h3>
                <p className="text-gray-300 mb-4">{tutorial.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {tutorial.levels.map((level) => (
                    <span
                      key={level}
                      className="bg-brand-red bg-opacity-10 text-brand-red px-3 py-1 rounded-full text-sm"
                    >
                      {level}
                    </span>
                  ))}
                </div>
                <button className="w-full bg-gradient-to-r from-red-600 to-red-800 text-white px-4 py-2 rounded-full hover:opacity-90 transition">
                  Start Learning
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}