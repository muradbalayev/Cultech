import logo from '../assets/logo.png';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="mx-auto px-6 sm:px-12 lg:px-20">
        <div className="flex justify-between items-center">
          
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
            <span className="text-lg font-semibold">CulTech</span>
          </div>

          {/* Tagline or Description */}
          <p className="md:block hidden text-sm text-gray-400">
            © 2024 Your Company. All rights reserved. | Building a sustainable future.
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="text-gray-400 hover:text-white transition">
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" className="text-gray-400 hover:text-white transition">
              <FaTwitter className="w-5 h-5" />
            </a>
            <a href="https://instagram.com" className="text-gray-400 hover:text-white transition">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition">
              <FaLinkedinIn className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
