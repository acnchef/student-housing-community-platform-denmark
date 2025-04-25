import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm shadow-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-start to-primary-end bg-clip-text text-transparent">HomeBase</span>
          </div>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><a href="#features" className="text-dawn hover:text-midnight transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-dawn hover:text-midnight transition-colors">How It Works</a></li>
              <li><a href="#testimonials" className="text-dawn hover:text-midnight transition-colors">Testimonials</a></li>
              <li><a href="#faq" className="text-dawn hover:text-midnight transition-colors">FAQ</a></li>
            </ul>
          </nav>
          
          <div className="hidden md:block">
            <a href="#join-waitlist">
              <Button variant="primary">Join Waitlist</Button>
            </a>
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
            <a href="#features" className="block px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>
              Features
            </a>
            <a href="#how-it-works" className="block px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>
              How It Works
            </a>
            <a href="#testimonials" className="block px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>
              Testimonials
            </a>
            <a href="#faq" className="block px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>
              FAQ
            </a>
            <a href="#join-waitlist" className="block px-3 py-2 text-base font-medium text-blue-600 hover:bg-blue-50" onClick={() => setIsMenuOpen(false)}>
              Join Waitlist
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
