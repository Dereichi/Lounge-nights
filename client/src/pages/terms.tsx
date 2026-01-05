import { Link } from "wouter";

export default function Terms() {
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
            TERMS AND CONDITIONS
          </h1>
          <p className="text-gray-600 text-lg">
            Last updated: January 2025
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              By accessing and using Balkaz Lounge's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              2. Reservations and Bookings
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              All reservations are subject to availability and confirmation. We reserve the right to refuse or cancel reservations at our discretion. Cancellations must be made at least 24 hours in advance for full refunds.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Balkaz Lounge is not responsible for any loss or damage to personal property left on premises.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              3. Age Restrictions
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              You must be at least 18 years old to enter Balkaz Lounge premises. Valid identification may be required at the door. We reserve the right to refuse entry to anyone who appears intoxicated or under the influence of drugs.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              4. Code of Conduct
            </h2>
            <ul className="text-gray-700 mb-4 space-y-2 ml-6">
              <li>• Respect fellow guests and staff at all times</li>
              <li>• No disruptive behavior, fighting, or inappropriate conduct</li>
              <li>• Smoking is only permitted in designated outdoor areas</li>
              <li>• Photography and recording may be restricted in certain areas</li>
              <li>• Management reserves the right to remove anyone violating these rules</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              5. Liability
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Balkaz Lounge is not liable for any loss, damage, or injury that may occur on our premises. Guests enter at their own risk. We recommend consuming alcohol responsibly.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We are not responsible for lost or stolen personal belongings. Please keep valuables secure at all times.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              6. Contact Information
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              For questions about these terms, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700">
                <strong>Email:</strong> legal@balkazlounge.com<br />
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