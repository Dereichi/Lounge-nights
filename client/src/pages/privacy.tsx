import { Link } from "wouter";

export default function Privacy() {
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
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            PRIVACY POLICY
          </h1>
          <p className="text-gray-600 text-lg">
            Last updated: January 2025
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              1. Information We Collect
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We collect information you provide directly to us, such as when you make a reservation, create an account, or contact us for support. This may include your name, email address, phone number, and payment information.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We also automatically collect certain information about your device and how you interact with our services, including IP address, browser type, and usage data.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              2. How We Use Your Information
            </h2>
            <ul className="text-gray-700 mb-4 space-y-2 ml-6">
              <li>• Process reservations and payments</li>
              <li>• Provide customer support and respond to inquiries</li>
              <li>• Send administrative information and updates</li>
              <li>• Improve our services and develop new features</li>
              <li>• Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              3. Information Sharing
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share your information with trusted service providers who assist us in operating our website and conducting our business.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              4. Data Security
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              5. Your Rights
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              You have the right to access, update, or delete your personal information. You may also opt out of receiving promotional communications from us. To exercise these rights, please contact us using the information provided below.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              6. Contact Us
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700">
                <strong>Email:</strong> privacy@balkazlounge.com<br />
                <strong>Phone:</strong> (555) 123-4567<br />
                <strong>Address:</strong> 123 Night Street, Lagos, Nigeria
              </p>
            </div>
          </section>
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