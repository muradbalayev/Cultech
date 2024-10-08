import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
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

  const isHomePage = location.pathname === '/';

  return (
    <nav className={`fixed max-w-[1600px]  top-0 w-full z-50 transition-all duration-300 ${isHomePage && !isScrolled ? 'bg-transparent' : 'bg-white shadow-md'}`}>
      <div className=" px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex gap-3 items-center">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
            <p className={` ${isScrolled || !isHomePage ? 'text-gray-700' : 'text-white'} text-lg font-semibold pt-1`}>CulTech</p>
          </div>

          {/* Links */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className={`text-lg font-semibold transition-all duration-300 ease-in-out ${isScrolled || !isHomePage ? 'text-gray-700' : 'text-white'} hover:text-orange-500 hover:underline hover:underline-offset-8`}>Home</Link>
            <Link to="/blog" className={`text-lg font-semibold transition-all duration-300 ease-in-out ${isScrolled || !isHomePage ? 'text-gray-700' : 'text-white'} hover:text-orange-500 hover:underline hover:underline-offset-8`}>Blog</Link>
            <a href="#" className={`text-lg font-semibold transition-all duration-300 ease-in-out ${isScrolled || !isHomePage ? 'text-gray-700' : 'text-white'} hover:text-orange-500 hover:underline hover:underline-offset-8`}>Services</a>
            <a href="#" className={`text-lg font-semibold transition-all duration-300 ease-in-out ${isScrolled || !isHomePage ? 'text-gray-700' : 'text-white'} hover:text-orange-500 hover:underline hover:underline-offset-8`}>Contact</a>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <button type="button" className={`text-lg ${isScrolled || !isHomePage ? 'text-gray-700' : 'text-white'} focus:outline-none`}>
              <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
