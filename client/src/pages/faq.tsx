import { Link } from "wouter";

export default function FAQ() {
  const faqs = [
    {
      question: "What are your operating hours?",
      answer: "We are open from 6:00 PM to 2:00 AM, Thursday through Sunday. Please check our social media for any special events or extended hours."
    },
    {
      question: "Do you accept reservations?",
      answer: "Yes, we highly recommend making a reservation, especially for weekends and special events. You can reserve through our website or by calling our reservations line."
    },
    {
      question: "Is there a dress code?",
      answer: "We maintain an elegant casual dress code. Smart casual attire is appropriate. We reserve the right to refuse entry to guests not meeting our dress standards."
    },
    {
      question: "Do you serve food?",
      answer: "Yes, we offer a selection of premium appetizers and small plates alongside our extensive cocktail menu. Our kitchen operates during our full operating hours."
    },
    {
      question: "Is smoking allowed?",
      answer: "We maintain a smoke-free environment throughout the venue. Designated smoking areas are available outside the premises."
    },
    {
      question: "Do you host private events?",
      answer: "Yes, we offer private event hosting for birthdays, corporate events, and special occasions. Please contact our events team for availability and pricing."
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
              <Link href="/frequently-asked-questions" className="text-gray-900 font-medium">FAQ</Link>
              <Link href="/contact-support" className="text-gray-600 hover:text-gray-900 transition-colors">Help</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            FREQUENTLY ASKED QUESTIONS
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about Balkaz Lounge
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                {faq.question}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-red-50 border border-red-100 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            STILL HAVE QUESTIONS?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Can't find what you're looking for? Our team is here to help you with any questions or concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@balkazlounge.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
            >
              Contact Us
            </a>
            <Link
              href="/contact-support"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              Visit Help Center
            </Link>
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