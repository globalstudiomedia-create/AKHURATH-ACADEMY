import { useState, useRef, useEffect } from 'react';
import { Plane, ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav
  className={`absolute top-0 left-0 w-full z-50 transition-all duration-300`}
>
  <div className="container mx-auto px-4">
    {/* floating nav bar */}
    <div
      className={`mt-4 flex items-center justify-between rounded-3xl px-5 md:px-7 py-3 md:py-4 border backdrop-blur-xl
      ${
        scrolled
          ? 'bg-blue-950/90 border-white/10 shadow-2xl'
          : 'bg-blue-900/20 border-white/20 shadow-md'
      }`}
    >
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-3 group">
        <div className="bg-gradient-to-br from-amber-400 to-amber-600 p-2.5 rounded-2xl group-hover:shadow-lg group-hover:-translate-y-0.5 transition-all duration-300">
          <Plane className="w-6 h-6 text-blue-950" />
        </div>
        <div className="hidden sm:block">
          <h1 className="text-base md:text-lg font-bold text-white tracking-[0.18em]">
            AKHURATH
          </h1>
          <p className="text-[10px] md:text-xs text-amber-300 tracking-[0.24em] -mt-1">
            AVIATION
          </p>
        </div>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-1 xl:gap-2">
        <Link
          to="/"
          className="px-4 py-2 text-sm font-semibold text-blue-50 rounded-full hover:bg-white/10 hover:text-amber-300 transition-colors"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="px-4 py-2 text-sm font-semibold text-blue-50 rounded-full hover:bg-white/10 hover:text-amber-300 transition-colors"
        >
          About
        </Link>

        {/* Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="px-4 py-2 text-sm font-semibold text-blue-50 rounded-full hover:bg-white/10 hover:text-amber-300 transition-colors flex items-center gap-1"
          >
            Programs
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${
                isDropdownOpen ? 'rotate-180' : ''
              }`}
            />
          </button>

          {isDropdownOpen && (
            <div className="absolute left-0 mt-3 w-72 bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100">
              <Link
                to="/programs/aviation"
                onClick={() => setIsDropdownOpen(false)}
                className="block px-6 py-3 text-sm text-gray-800 hover:bg-amber-50 hover:text-amber-700 font-semibold transition border-b border-slate-100"
              >
                Aviation Courses
              </Link>
              <Link
                to="/programs/tech"
                onClick={() => setIsDropdownOpen(false)}
                className="block px-6 py-3 text-sm text-gray-800 hover:bg-amber-50 hover:text-amber-700 font-semibold transition border-b border-slate-100"
              >
                AI & Tech Courses
              </Link>
              <Link
                to="/programs/cyber"
                onClick={() => setIsDropdownOpen(false)}
                className="block px-6 py-3 text-sm text-gray-800 hover:bg-amber-50 hover:text-amber-700 font-semibold transition"
              >
                Cybersecurity & Ethical Hacking
              </Link>
            </div>
          )}
        </div>

        <Link
          to="/admissions"
          className="px-4 py-2 text-sm font-semibold text-blue-50 rounded-full hover:bg-white/10 hover:text-amber-300 transition-colors"
        >
          Admissions
        </Link>
        <Link
          to="/placements"
          className="px-4 py-2 text-sm font-semibold text-blue-50 rounded-full hover:bg-white/10 hover:text-amber-300 transition-colors"
        >
          Placements
        </Link>
        <Link
          to="/contact"
          className="px-4 py-2 text-sm font-semibold text-blue-50 rounded-full hover:bg-white/10 hover:text-amber-300 transition-colors"
        >
          Contact
        </Link>
      </div>

      {/* Desktop CTA */}
      <div className="hidden lg:block">
        <Link
          to="/admissions"
          className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-bold text-blue-950 bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all"
        >
          Apply Now
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden text-white hover:text-amber-300 transition-colors"
      >
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
    </div>

    {/* Mobile Menu */}
    {isMobileMenuOpen && (
      <div className="lg:hidden mt-3 rounded-3xl border border-white/10 bg-blue-950/90 backdrop-blur-xl px-4 py-4 shadow-xl">
        {/* Mobile Links */}
        {[
          ['/','Home'],
          ['/about','About'],
        ].map(([to, label]) => (
          <Link
            key={to}
            to={to}
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-2 py-2.5 text-sm font-semibold text-white rounded-lg hover:bg-white/10 hover:text-amber-300"
          >
            {label}
          </Link>
        ))}

        {/* Mobile Dropdown */}
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex w-full items-center justify-between px-2 py-2.5 text-sm font-semibold text-white rounded-lg hover:bg-white/10 hover:text-amber-300"
        >
          Programs
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-300 ${
              isDropdownOpen ? 'rotate-180' : ''
            }`}
          />
        </button>

        {isDropdownOpen && (
          <div className="mt-1 ml-3 border-l-2 border-amber-400/70">
            {[
              ['/programs/aviation','Aviation Courses'],
              ['/programs/tech','AI & Tech Courses'],
              ['/programs/cyber','Cybersecurity & Ethical Hacking'],
            ].map(([to,label]) => (
              <Link
                key={to}
                to={to}
                onClick={() => {
                  setIsDropdownOpen(false);
                  setIsMobileMenuOpen(false);
                }}
                className="block px-4 py-2.5 text-sm text-white hover:bg-white/10 hover:text-amber-300"
              >
                {label}
              </Link>
            ))}
          </div>
        )}

        {[
          ['/admissions','Admissions'],
          ['/placements','Placements'],
          ['/contact','Contact'],
        ].map(([to,label]) => (
          <Link
            key={to}
            to={to}
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-2 py-2.5 text-sm font-semibold text-white rounded-lg hover:bg-white/10 hover:text-amber-300"
          >
            {label}
          </Link>
        ))}

        <Link
          to="/admissions"
          onClick={() => setIsMobileMenuOpen(false)}
          className="mt-4 block text-center rounded-full bg-gradient-to-r from-amber-400 to-amber-600 px-4 py-2.5 text-sm font-bold text-blue-950 hover:from-amber-500 hover:to-amber-700"
        >
          Apply Now
        </Link>
      </div>
    )}
  </div>
</nav>

  );
}
