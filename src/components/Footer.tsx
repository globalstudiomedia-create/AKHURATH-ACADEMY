import { Plane, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Branding */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-br from-amber-400 to-amber-600 p-3 rounded-lg">
                <Plane className="w-8 h-8 text-blue-950" />
              </div>
              <div>
                <h3 className="text-2xl font-bold tracking-wider">AKHURATH</h3>
                <p className="text-xs text-amber-400 tracking-widest">AVIATION INSTITUTE</p>
              </div>
            </div>
            <p className="text-blue-200 leading-relaxed">
              Kerala's aviation-first training institution helping students build job-ready
              careers in aviation, cyber security & AI technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-amber-400">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-blue-200 hover:text-amber-400 transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/programs/aviation"
                  className="text-blue-200 hover:text-amber-400 transition-colors duration-300"
                >
                  Aviation Courses
                </Link>
              </li>
              <li>
                <Link
                  to="/programs/tech"
                  className="text-blue-200 hover:text-amber-400 transition-colors duration-300"
                >
                  Tech / AI Courses
                </Link>
              </li>
              <li>
                <Link
                  to="/admissions"
                  className="text-blue-200 hover:text-amber-400 transition-colors duration-300"
                >
                  Admissions
                </Link>
              </li>
              <li>
                <Link
                  to="/placements"
                  className="text-blue-200 hover:text-amber-400 transition-colors duration-300"
                >
                  Placements
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-blue-200 hover:text-amber-400 transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-amber-400">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                <span className="text-blue-200">
                  Akhurath Advanced Studies<br />
                  Kerala, India
                </span>
              </li>
              <li className="flex items-center space-x-3">
  <a
    href="https://wa.me/919876543210" // Replace with your WhatsApp number
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-3 text-blue-200 hover:text-amber-400 transition-colors"
  >
    <Phone className="w-5 h-5 text-amber-400 flex-shrink-0" />
    <span>+91 98765 43210</span>
  </a>
</li>

<li className="flex items-center space-x-3">
  <a
    href="mailto:admissions@akhurath.edu" // Opens mail app
    className="flex items-center space-x-3 text-blue-200 hover:text-amber-400 transition-colors"
  >
    <Mail className="w-5 h-5 text-amber-400 flex-shrink-0" />
    <span>contact@akhurathacademy.com</span>
  </a>
</li>

            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-amber-400">Follow Us</h4>
            <p className="text-blue-200 mb-6">
              Stay connected for updates, success stories, and career opportunities.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noreferrer"
                className="bg-white/10 hover:bg-amber-500 p-3 rounded-full transition-all duration-300 hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="http://x.com/akhurathacadmey" target="_blank" rel="noreferrer"
                className="bg-white/10 hover:bg-amber-500 p-3 rounded-full transition-all duration-300 hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/akhurathacademy/" target="_blank" rel="noreferrer"
                className="bg-white/10 hover:bg-amber-500 p-3 rounded-full transition-all duration-300 hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/akhurath-academy-b31033394/" target="_blank" rel="noreferrer"
                className="bg-white/10 hover:bg-amber-500 p-3 rounded-full transition-all duration-300 hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@AkhurathAcademy" target="_blank" rel="noreferrer"
                className="bg-white/10 hover:bg-amber-500 p-3 rounded-full transition-all duration-300 hover:scale-110">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-800 pt-8 text-center">
          <p className="text-blue-300">
            &copy; {new Date().getFullYear()} Akhurath Aviation Institute. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
