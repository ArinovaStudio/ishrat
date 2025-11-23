import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-12 lg:px-24 py-12 md:py-16">
      {/* Top Labels */}
      <div className="flex justify-between items-center mb-8">
        <span className="text-gray-400 text-sm md:text-xl font-tenor">Author</span>
        <span className="text-gray-400 text-sm md:text-xl font-tenor">Shayar</span>
        <span className="text-gray-400 text-sm md:text-xl font-tenor">Writer</span>
      </div>

      {/* Decorative Lines */}
      <div className="grid grid-cols-12 md:grid-cols-20 gap-2 md:gap-3 mb-12 md:mb-16">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="h-px bg-gray-700 hidden md:block"></div>
        ))}
        {[...Array(12)].map((_, i) => (
          <div key={i} className="h-px bg-gray-700 md:hidden"></div>
        ))}
      </div>

      {/* Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 font-teacher">ISHRAT FAYAZ</h2>
          <p className="text-gray-400 text-sm md:text-xl leading-relaxed font-poppins">
A devoted writer and advocate, she amplifies women’s voices, with Flying with Words unveiling strength, mystery, and the shadows behind resilience.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl md:text-4xl mb-6 font-poppins font-light">Quick Links</h3>
          <ul className="space-y-4">
            <li>
              <Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm md:text-2xl font-poppins font-light">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm md:text-2xl font-poppins font-light">
                About
              </Link>
            </li>
            <li>
              <Link to="/books" className="text-gray-400 hover:text-white transition-colors text-sm md:text-2xl font-poppins font-light">
                Books
              </Link>
            </li>
            <li>
              <Link to="/podcasts" className="text-gray-400 hover:text-white transition-colors text-sm md:text-2xl font-poppins font-light">
                Podcasts
              </Link>
            </li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div>
          <h3 className="text-xl md:text-4xl mb-6 font-poppins font-light">Get in Touch</h3>
          <div className="space-y-3 mb-6">
            <p className="text-gray-400 font-poppins text-sm md:text-lg">90865XX2</p>
            <p className="text-gray-400 font-poppins text-sm md:text-lg">adarshpanditdev@gmail.com</p>
            <p className="text-gray-400 font-poppins text-sm md:text-lg">Kashmir, India</p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <Link
              to="https://twiiter.com/"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-600 flex items-center justify-center hover:border-white transition-colors"
              aria-label="Twitter"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </Link>
            <Link
              to="https://facebook.com/"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-600 flex items-center justify-center hover:border-white transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </Link>
            <Link
              to="https://youtube.com/"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-600 flex items-center justify-center hover:border-white transition-colors"
              aria-label="YouTube"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 9.71a8.5 8.5 0 00-.91-4.13 2.92 2.92 0 00-1.72-1A78.36 78.36 0 0012 4.27a78.45 78.45 0 00-8.34.3 2.87 2.87 0 00-1.46.74c-.9.83-1 2.25-1.1 3.45a48.29 48.29 0 000 6.48 9.55 9.55 0 00.3 2.12 2.93 2.93 0 001.15 1.51 3.5 3.5 0 001.47.5c2.06.2 8.22.26 8.22.26s6.16-.06 8.22-.26a3.5 3.5 0 001.47-.5 2.93 2.93 0 001.15-1.51 9.55 9.55 0 00.3-2.12 48.29 48.29 0 000-6.48zM9.74 14.85V8.66l5.92 3.11c-1.66.92-3.85 1.96-5.92 3.08z" />
              </svg>
            </Link>
            <Link
              to="https://linkedin.com/"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-600 flex items-center justify-center hover:border-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </Link>
            <Link
              to="mailto:"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-600 flex items-center justify-center hover:border-white transition-colors"
              aria-label="Email"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;