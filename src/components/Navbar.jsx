import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Menu, Close, X } from '@mui/icons-material';
import { FaXmark } from 'react-icons/fa6';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Get the current route

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === '/' && window.scrollY > 50) {
        setIsScrolled(true);
      } else if (location.pathname === '/') {
        setIsScrolled(false);
      }
    };

    if (location.pathname === '/') {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isHomePage = location.pathname === '/';

  return (
    <nav className={`fixed max-w-[1600px] top-0 w-full z-50 transition-all duration-300 ${isHomePage && !isScrolled ? 'bg-transparent' : 'bg-white shadow-md'}`}>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex gap-3 items-center">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
            <p className={` ${isScrolled || !isHomePage ? 'text-gray-700' : 'text-white'} text-lg font-semibold pt-1`}>CulTech</p>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className={`text-lg font-semibold transition-all duration-300 ease-in-out ${isScrolled || !isHomePage ? 'text-gray-700' : 'text-white'} hover:text-orange-500 hover:underline hover:underline-offset-8`}>Home</Link>
            <Link to="/blog" className={`text-lg font-semibold transition-all duration-300 ease-in-out ${isScrolled || !isHomePage ? 'text-gray-700' : 'text-white'} hover:text-orange-500 hover:underline hover:underline-offset-8`}>Blog</Link>
            <a href="#" className={`text-lg font-semibold transition-all duration-300 ease-in-out ${isScrolled || !isHomePage ? 'text-gray-700' : 'text-white'} hover:text-orange-500 hover:underline hover:underline-offset-8`}>Services</a>
            <a href="#" className={`text-lg font-semibold transition-all duration-300 ease-in-out ${isScrolled || !isHomePage ? 'text-gray-700' : 'text-white'} hover:text-orange-500 hover:underline hover:underline-offset-8`}>Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button type="button" onClick={toggleMenu} className={`text-lg ${isScrolled || !isHomePage ? 'text-gray-700' : 'text-white'} focus:outline-none`}>
              {isMenuOpen ? <Close /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (animated) */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-75 text-white flex flex-col items-center justify-center space-y-8 transform ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        } transition-transform duration-700 ease-in-out z-40`}
      >
        <FaXmark className="absolute top-6 right-6 text-4xl" onClick={toggleMenu} />
        <Link to="/" className="text-3xl font-semibold hover:text-orange-400" onClick={toggleMenu}>Home</Link>
        <Link to="/blog" className="text-3xl font-semibold hover:text-orange-400" onClick={toggleMenu}>Blog</Link>
        <a href="#" className="text-3xl font-semibold hover:text-orange-400" onClick={toggleMenu}>Services</a>
        <a href="#" className="text-3xl font-semibold hover:text-orange-400" onClick={toggleMenu}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
