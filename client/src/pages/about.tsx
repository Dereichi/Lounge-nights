import { Link } from "wouter";

export default function About() {
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
              <Link href="/about-us" className="text-gray-900 font-medium">About Us</Link>
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
            ABOUT BALKAZ LOUNGE
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the story behind Nigeria's premier nightlife destination
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              OUR STORY
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Founded with a vision to redefine nightlife in Lagos, Balkaz Lounge has become the ultimate destination for those seeking unforgettable experiences. Our journey began with a simple belief: nightlife should be more than just entertainment—it should be an art form.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Since our inception, we've curated an atmosphere where sophistication meets excitement, where every detail is crafted to perfection, and where memories are made that last a lifetime.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              OUR MISSION
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              To create extraordinary nightlife experiences that bring people together, celebrate diversity, and provide moments of pure joy and connection in an environment of elegance and respect.
            </p>
            <div className="bg-red-50 p-6 rounded-lg border border-red-100">
              <p className="text-red-800 font-medium italic">
                "Where every night becomes a masterpiece of memories."
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            WHAT MAKES US SPECIAL
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎵</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Curated Music</h3>
              <p className="text-gray-600">World-class DJs and carefully selected playlists for every mood</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🥂</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Signature Cocktails</h3>
              <p className="text-gray-600">Expertly crafted drinks using premium ingredients</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Elegant Atmosphere</h3>
              <p className="text-gray-600">Sophisticated ambiance with attention to every detail</p>
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