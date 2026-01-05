import { Link } from "wouter";

export default function Jobs() {
  const positions = [
    {
      title: "Bartender",
      type: "Full-time",
      location: "Lagos, Nigeria",
      description: "Join our team of skilled bartenders and help create unforgettable cocktail experiences for our guests."
    },
    {
      title: "Server/Waitstaff",
      type: "Part-time/Full-time",
      location: "Lagos, Nigeria",
      description: "Provide excellent customer service and ensure our guests have an outstanding dining experience."
    },
    {
      title: "DJ/Music Coordinator",
      type: "Part-time",
      location: "Lagos, Nigeria",
      description: "Curate the perfect soundtrack for our nightlife events and special occasions."
    },
    {
      title: "Marketing Coordinator",
      type: "Full-time",
      location: "Lagos, Nigeria",
      description: "Help promote Balkaz Lounge and engage with our community through various marketing channels."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <Link href="/" className="text-3xl font-black" style={{ color: '#E50914', fontFamily: 'Bebas Neue, sans-serif' }}>
              BALKAZ
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">Home</Link>
              <Link href="/about-us" className="text-gray-600 hover:text-gray-900 transition-colors">About Us</Link>
              <Link href="/frequently-asked-questions" className="text-gray-600 hover:text-gray-900 transition-colors">FAQ</Link>
              <Link href="/contact-support" className="text-gray-600 hover:text-gray-900 transition-colors">Help</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            JOIN OUR TEAM
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Be part of Nigeria's premier nightlife destination. We're always looking for talented individuals to join our team.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            CURRENT OPENINGS
          </h2>
          <div className="grid gap-6">
            {positions.map((position, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span className="bg-gray-100 px-3 py-1 rounded-full">{position.type}</span>
                      <span className="flex items-center gap-1">
                        📍 {position.location}
                      </span>
                    </div>
                  </div>
                  <button className="mt-4 md:mt-0 px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors">
                    Apply Now
                  </button>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {position.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-red-50 border border-red-100 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            DON'T SEE YOUR ROLE?
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            We're always interested in hearing from talented individuals. Send us your resume and let us know how you'd like to contribute to the Balkaz Lounge experience.
          </p>
          <button className="px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors">
            Send Resume
          </button>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            WHY JOIN BALKAZ?
          </h3>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div>
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Growth Opportunities</h4>
              <p className="text-gray-600">Develop your skills in a fast-paced, dynamic environment</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Team Spirit</h4>
              <p className="text-gray-600">Work with passionate professionals who share your enthusiasm</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Premium Experience</h4>
              <p className="text-gray-600">Be part of creating unforgettable nightlife experiences</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">&copy; 2025 Balkaz Lounge Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}