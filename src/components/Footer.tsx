import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Fiction Digital</h3>
            <p className="text-gray-400 mb-4">
              Professional IT services to elevate your brand with cutting-edge video, design, and web solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/19ArU2JSL1/" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              {/* <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a> */}
              <a href="https://www.instagram.com/fiction.digital?utm_source=qr&igsh=MWY0aDk3OGpobDM2bQ==" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              {/* <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a> */}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/video-shooting" className="text-gray-400 hover:text-white transition-colors">
                  Video Shooting
                </Link>
              </li>
              <li>
                <Link to="/services/video-editing" className="text-gray-400 hover:text-white transition-colors">
                  Video Editing
                </Link>
              </li>
              <li>
                <Link to="/services/graphic-design" className="text-gray-400 hover:text-white transition-colors">
                  Graphic Design
                </Link>
              </li>
              <li>
                <Link to="/services/social-media" className="text-gray-400 hover:text-white transition-colors">
                  Social Media Handling
                </Link>
              </li>
              <li>
                <Link to="/services/web-design" className="text-gray-400 hover:text-white transition-colors">
                  Web Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              {/* <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li> */}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="text-indigo-500 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-400">ACFC Colony Gali no.2 Plot no. 73b Loco Shed Ratanada Jodhpur,Rajasthan (342011)</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-indigo-500 flex-shrink-0" size={18} />
                <span className="text-gray-400">+91 8385962604 , 9511510837 </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-indigo-500 flex-shrink-0" size={18} />
                <span className="text-gray-400">FictionDigitall@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>© {year} FictionDigital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;