import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import VideoShootingPage from './pages/services/VideoShootingPage';
import VideoEditingPage from './pages/services/VideoEditingPage';
import GraphicDesignPage from './pages/services/GraphicDesignPage';
import SocialMediaPage from './pages/services/SocialMediaPage';
import WebDesignPage from './pages/services/WebDesignPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header scrolled={scrolled} />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/services/video-shooting" element={<VideoShootingPage />} />
            <Route path="/services/video-editing" element={<VideoEditingPage />} />
            <Route path="/services/graphic-design" element={<GraphicDesignPage />} />
            <Route path="/services/social-media" element={<SocialMediaPage />} />
            <Route path="/services/web-design" element={<WebDesignPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;