import { motion } from 'framer-motion';
import {  Film, Youtube, Building, Tv2, BadgeCheck, Clapperboard } from 'lucide-react';
import HeroSection from '../../components/HeroSection';
import ServiceFeature from '../../components/ServiceFeature';
import { Link } from 'react-router-dom';
import heroImage from '../../images/1.jpg';

const VideoEditingPage = () => {
  const features = [
    {
      title: "Reels Editing",
      description: "Quick, engaging edits for Instagram and TikTok reels with trendy transitions and effects.",
      icon: <Film className="w-5 h-5" />
    },
    {
      title: "YouTube Video Editing",
      description: "Professional editing for long-form content with compelling storytelling and pacing.",
      icon: <Youtube className="w-5 h-5" />
    },
    {
      title: "Documentary Editing",
      description: "Thoughtful, narrative-driven editing for documentary projects with emotional impact.",
      icon: <Tv2 className="w-5 h-5" />
    },
    {
      title: "CGI Advertising",
      description: "Focuses On Enhancing and Expanding Clients' Digital Presence, by CGI Advertising. .",
      icon: <Building className="w-5 h-5" />
    },
    {
      title: "Promotional Videos",
      description: "Action-oriented editing for promotional content designed to convert viewers.",
      icon: <BadgeCheck className="w-5 h-5" />
    },
    {
      title: "Animation & Motion Graphics",
      description: "2D animations, logo animations, and custom motion graphics for visual enhancement.",
      icon: <Clapperboard className="w-5 h-5" />
    }
  ];
  
  // const heroImage = "https://images.pexels.com/photos/1424240/pexels-photo-1424240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  
  return (
    <>
      <HeroSection
        title="Video Editing Services"
        subtitle="Professional video editing for all types of content from quick reels to feature-length documentaries and promotional videos."
        imageSrc={heroImage}
      />
      
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold mb-6 text-center"
            >
              Video Editing Services
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-600 dark:text-gray-300 text-lg text-center mb-12"
            >
              Our professional editing team transforms raw footage into compelling visual stories that engage your audience and elevate your brand.
            </motion.p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <ServiceFeature
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  index={index}
                />
              ))}
            </div>
          </div>
          
          {/* Editing Process */}
          <div className="mt-24">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold mb-12 text-center"
            >
              Our Editing Process
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border-t-4 border-indigo-600"
              >
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center text-indigo-600 mb-6">
                  <span className="font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Initial Review</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We review all raw footage, select the best shots, and develop an editing strategy based on your goals and brand identity.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border-t-4 border-indigo-600"
              >
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center text-indigo-600 mb-6">
                  <span className="font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Rough Cut</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We create an initial edit with proper sequencing, pacing, and basic transitions to establish the overall flow and structure.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border-t-4 border-indigo-600"
              >
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center text-indigo-600 mb-6">
                  <span className="font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Fine Tuning</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Based on your feedback, we refine the edit, add graphics, color grading, sound design, and special effects as needed.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border-t-4 border-indigo-600"
              >
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center text-indigo-600 mb-6">
                  <span className="font-bold text-xl">4</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Final Polish</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We perfect every detail including titles, lower thirds, transitions, and ensure all audio levels are balanced.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border-t-4 border-indigo-600"
              >
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center text-indigo-600 mb-6">
                  <span className="font-bold text-xl">5</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Final Delivery</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We export the final video in various formats optimized for your intended platforms (social media, web, broadcast, etc.).
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="md:col-span-1 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border-t-4 border-indigo-600"
              >
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center text-indigo-600 mb-6">
                  <span className="font-bold text-xl">6</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Revisions</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We offer revision rounds to ensure the final product perfectly matches your vision and requirements.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      
      {/* CTA Section */}
      <section className="section bg-indigo-600 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold mb-6"
            >
              Ready to Edit Your Video?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl mb-8 text-indigo-100"
            >
              Transform your raw footage into compelling, professional content that captivates your audience.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link 
                to="/contact" 
                className="btn bg-white text-indigo-600 hover:bg-indigo-50"
              >
                Get a Free Quote
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoEditingPage;