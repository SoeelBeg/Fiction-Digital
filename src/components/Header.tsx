import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Laptop, Video, PenTool, Monitor, Instagram } from 'lucide-react';
import logo from '../images/4.png';


interface HeaderProps {
  scrolled: boolean;
}

const Header = ({ scrolled }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    {
      name: "Services",
      submenu: true,
      submenuItems: [
        { name: "Video Shooting", path: "/services/video-shooting", icon: <Video className="w-5 h-5" /> },
        { name: "Video Editing", path: "/services/video-editing", icon: <Laptop className="w-5 h-5" /> },
        { name: "Graphic Design", path: "/services/graphic-design", icon: <PenTool className="w-5 h-5" /> },
        { name: "Social Media", path: "/services/social-media", icon: <Instagram className="w-5 h-5" /> },
        { name: "Web & App", path: "/services/web-design", icon: <Monitor className="w-5 h-5" /> }
      ]
    },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white dark:bg-gray-900 shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.img
              src={logo}
              alt="Logo"
              className="h-10 w-auto"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatDelay: 5 }}
            />

            <span className="font-bold text-xl md:text-2xl tracking-tight text-gray-900 dark:text-white">
              Fiction<span className="text-indigo-600 dark:text-indigo-500">Digital</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              link.submenu ? (
                <div key={index} className="relative group">
                  <button className={`font-medium transition-colors duration-300 ${location.pathname.includes('/services') ? 'text-indigo-600 dark:text-indigo-500' : 'text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-500'}`}>
                    {link.name}
                  </button>
                  <div className="absolute left-0 mt-2 w-60 hidden group-hover:block">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-xl">
                      {link.submenuItems?.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.path}
                          className="flex items-center space-x-2 p-3 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors duration-300"
                        >
                          {subItem.icon}
                          <span className="text-gray-700 dark:text-gray-200">{subItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={index}
                  to={link.path}
                  className={`font-medium transition-colors duration-300 ${location.pathname === link.path ? 'text-indigo-600 dark:text-indigo-500' : 'text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-500'}`}
                >
                  {link.name}
                </Link>
              )
            ))}
            <Link to="/contact" className="btn btn-primary shadow-lg shadow-indigo-600/20">
              Get Started
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-700 dark:text-gray-200 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden bg-white dark:bg-gray-900 fixed inset-0 z-50 pt-20 px-4 overflow-y-auto"
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              link.submenu ? (
                <div key={index} className="flex flex-col space-y-2">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{link.name}</h4>
                  <div className="pl-4 flex flex-col space-y-2">
                    {link.submenuItems?.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.path}
                        className="flex items-center space-x-2 py-3 px-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                      >
                        {subItem.icon}
                        <span className="text-gray-700 dark:text-gray-200">{subItem.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={index}
                  to={link.path}
                  className={`py-3 px-4 rounded-lg ${location.pathname === link.path ? 'bg-indigo-50 dark:bg-gray-800 text-indigo-600 dark:text-indigo-500' : 'text-gray-700 dark:text-gray-200'}`}
                >
                  {link.name}
                </Link>
              )
            ))}
            <Link to="/contact" className="btn btn-primary mt-4 text-center">
              Get Started
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;