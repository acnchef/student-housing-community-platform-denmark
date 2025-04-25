import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm shadow-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-primary-start to-primary-end bg-clip-text text-transparent">
              HomeBase
            </Link>
          </div>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><Link to="/#features" className="text-dawn hover:text-midnight transition-colors">Features</Link></li>
              <li><Link to="/#how-it-works" className="text-dawn hover:text-midnight transition-colors">How It Works</Link></li>
              <li><Link to="/#testimonials" className="text-dawn hover:text-midnight transition-colors">Testimonials</Link></li>
              <li><Link to="/#faq" className="text-dawn hover:text-midnight transition-colors">FAQ</Link></li>
            </ul>
          </nav>
          
          <div className="hidden md:block">
            <Link to="/waitlist">
              <Button variant="primary">Join Waitlist</Button>
            </Link>
          </div>
          
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link to="/#features" className="block px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>
              Features
            </Link>
            <Link to="/#how-it-works" className="block px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>
              How It Works
            </Link>
            <Link to="/#testimonials" className="block px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>
              Testimonials
            </Link>
            <Link to="/#faq" className="block px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>
              FAQ
            </Link>
            <Link to="/waitlist" className="block px-3 py-2 text-base font-medium text-blue-600 hover:bg-blue-50" onClick={() => setIsMenuOpen(false)}>
              Join Waitlist
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
