import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Video, Laptop, PenTool, Instagram, Monitor, Play, ChevronRight, Star } from 'lucide-react';

import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import Testimonial from '../components/Testimonial';
import AnimatedCanvas from '../components/AnimatedCanvas';
import heroImage from '../images/11.jpg';

const HomePage = () => {
 
  
  const services = [
    {
      title: "Video Shooting",
      description: "Professional video shooting services for reels, YouTube videos, and business content.",
      icon: <Video className="w-8 h-8" />,
      link: "/services/video-shooting"
    },
    {
      title: "Video Editing",
      description: "Expert editing for reels, YouTube, documentaries, promotional videos, and more.",
      icon: <Laptop className="w-8 h-8" />,
      link: "/services/video-editing"
    },
    {
      title: "Graphic Design",
      description: "Creative graphic design services including logos, branding, social media graphics, and packaging.",
      icon: <PenTool className="w-8 h-8" />,
      link: "/services/graphic-design"
    },
    {
      title: "Social Media Handling",
      description: "Complete social media management with account setup, daily posts, and ad campaigns.",
      icon: <Instagram className="w-8 h-8" />,
      link: "/services/social-media"
    },
    {
      title: "Web Design",
      description: "Custom website design and development with responsive layouts and e-commerce solutions.",
      icon: <Monitor className="w-8 h-8" />,
      link: "/services/web-design"
    }
  ];
  
  const testimonials = [
    {
      quote: "Their video editing services transformed our promotional content. The quality of work exceeded our expectations and helped us boost engagement by 45%.",
      author: "Sarah Johnson",
      position: "Marketing Director, TechVision Inc."
    },
    {
      quote: "The web design team created a stunning e-commerce platform that increased our conversion rates dramatically. Highly recommended!",
      author: "Michael Chen",
      position: "CEO, StyleHaven"
    },
    {
      quote: "Their social media management has been instrumental in growing our brand presence. Consistent, creative, and results-oriented.",
      author: "Jessica Williams",
      position: "Brand Manager, EcoCraft"
    }
  ];
  
  return (
    <>
      <HeroSection
        title="Transfrom Your Business With Fiction Digital"
        subtitle="You Just Imagine We Will Make It"
        imageSrc={heroImage}
      />
      
      {/* Services Section */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <AnimatedCanvas />
        </div>
        
        <div className="container relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-lg">
              Comprehensive digital solutions to help your business grow and succeed in the digital landscape.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-indigo-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <rect width="100%" height="100%" fill="none"/>
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Ready to Transform Your Digital Presence?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl mb-8 text-indigo-100"
            >
              Let's discuss how our services can help your business grow in the digital world.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link 
                to="/contact"
                className="btn bg-white text-indigo-600 hover:bg-indigo-50 hover:scale-105"
              >
                Contact Us Today
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;