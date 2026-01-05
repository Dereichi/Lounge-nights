import { Link } from "wouter";

export default function Help() {
  const helpCategories = [
    {
      title: "Reservations",
      icon: "📅",
      description: "How to make, modify, or cancel reservations",
      topics: ["Making a reservation", "Group bookings", "Cancellation policy", "Table preferences"]
    },
    {
      title: "Menu & Drinks",
      icon: "🍸",
      description: "Information about our menu and beverage options",
      topics: ["Cocktail menu", "Food options", "Allergies & dietary restrictions", "Special requests"]
    },
    {
      title: "Events & Parties",
      icon: "🎉",
      description: "Planning events and private parties",
      topics: ["Private events", "Birthday parties", "Corporate events", "Event packages"]
    },
    {
      title: "Venue & Access",
      icon: "🏢",
      description: "Getting to Balkaz and venue information",
      topics: ["Location & directions", "Parking", "Dress code", "Accessibility"]
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
              <Link href="/contact-support" className="text-gray-900 font-medium">Help</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            HELP CENTER
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers and get support for all your Balkaz Lounge questions
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for help..."
              className="w-full px-6 py-4 text-lg border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
            <button className="absolute right-2 top-2 bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors font-semibold">
              Search
            </button>
          </div>
        </div>

        {/* Help Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {helpCategories.map((category, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 cursor-pointer">
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                {category.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {category.description}
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                {category.topics.slice(0, 2).map((topic, idx) => (
                  <li key={idx}>• {topic}</li>
                ))}
                {category.topics.length > 2 && (
                  <li className="text-red-600 font-medium">• +{category.topics.length - 2} more</li>
                )}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            NEED MORE HELP?
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Our support team is here to help you with any questions or concerns. Get in touch with us through any of the channels below.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl mb-3">📞</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone Support</h3>
              <p className="text-gray-600 mb-3">Call us during business hours</p>
              <p className="text-red-600 font-semibold">(555) 123-4567</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl mb-3">✉️</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Support</h3>
              <p className="text-gray-600 mb-3">Get help via email</p>
              <p className="text-red-600 font-semibold">help@balkazlounge.com</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl mb-3">💬</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Chat</h3>
              <p className="text-gray-600 mb-3">Chat with us online</p>
              <button className="text-red-600 font-semibold hover:text-red-700 transition-colors">
                Start Chat →
              </button>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              Popular Resources
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/frequently-asked-questions" className="px-4 py-2 bg-white border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition-colors">
                FAQ
              </Link>
              <Link href="/privacy-policy" className="px-4 py-2 bg-white border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-and-conditions" className="px-4 py-2 bg-white border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition-colors">
                Terms of Service
              </Link>
              <Link href="/about-us" className="px-4 py-2 bg-white border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition-colors">
                About Us
              </Link>
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