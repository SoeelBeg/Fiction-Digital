import { motion } from 'framer-motion';
import { Instagram, Facebook, Youtube, MessageSquare, LineChart, BarChart, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroSection from '../../components/HeroSection';
import ServiceFeature from '../../components/ServiceFeature';

const SocialMediaPage = () => {
  const features = [
    {
      title: "Account Setup & Optimization",
      description: "Professional setup and optimization of your social media profiles across Facebook, Instagram, YouTube and more.",
      icon: <Users className="w-5 h-5" />
    },
    {
      title: "Daily Content Creation",
      description: "Regular, engaging posts including graphics, videos, and compelling captions tailored to your audience.",
      icon: <MessageSquare className="w-5 h-5" />
    },
    {
      title: "Paid Ad Campaigns",
      description: "Strategic paid social media advertising campaigns designed to reach your target audience and achieve your goals.",
      icon: <Zap className="w-5 h-5" />
    },
    {
      title: "Performance Analytics",
      description: "Detailed reports and analytics to track growth, engagement, and return on investment.",
      icon: <LineChart className="w-5 h-5" />
    }
  ];
  
  const platforms = [
    {
      name: "Instagram",
      icon: <Instagram size={40} />,
      description: "Reach younger audiences with visual content."
    },
    {
      name: "Facebook",
      icon: <Facebook size={40} />,
      description: "Connect with diverse demographics and communities."
    },
    {
      name: "YouTube",
      icon: <Youtube size={40} />,
      description: "Build authority with in-depth video content."
    }
  ];
  
  const heroImage = "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  
  return (
    <>
      <HeroSection
        title="Social Media Management"
        subtitle="Comprehensive social media handling services to grow your brand's online presence and engage with your audience."
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
              Social Media Services
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-600 dark:text-gray-300 text-lg text-center mb-12"
            >
              We manage your social media presence with strategic content creation, community engagement, and data-driven campaigns.
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
        </div>
      </section>
      
      {/* Platforms Section */}
      <section className="section bg-gray-50 dark:bg-gray-800">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Platforms We Manage
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg text-center"
              >
                <div className="mx-auto w-20 h-20 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6">
                  {platform.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{platform.name}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {platform.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Results Section */}
      <section className="section">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Results That Speak</h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-lg">
              Our social media management services have helped businesses achieve significant growth in their online presence.
            </p>
          </motion.div>

          <div className="mt-12 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold mb-4">Our Approach to Social Media</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  We take a strategic, data-driven approach to social media management, focusing on content that resonates with your audience and drives meaningful engagement.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <BarChart className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mt-1 mr-2" />
                    <span className="text-gray-600 dark:text-gray-300">Regular performance analysis and strategy adjustments</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mt-1 mr-2" />
                    <span className="text-gray-600 dark:text-gray-300">Audience research and content tailoring</span>
                  </li>
                  <li className="flex items-start">
                    <MessageSquare className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mt-1 mr-2" />
                    <span className="text-gray-600 dark:text-gray-300">Community management and engagement</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mt-1 mr-2" />
                    <span className="text-gray-600 dark:text-gray-300">Trend monitoring and rapid response</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <img 
                  src="https://images.pexels.com/photos/6476808/pexels-photo-6476808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Social Media Analytics" 
                  className="rounded-xl shadow-lg"
                />
                <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-indigo-600 rounded-xl shadow-lg flex items-center justify-center text-white">
                  <div className="text-center">
                    <div className="text-xl font-bold">100%</div>
                    <div className="text-xs">Data-Driven</div>
                  </div>
                </div>
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
              Boost Your Social Media Presence
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl mb-8 text-indigo-100"
            >
              Let our experts manage your social media while you focus on running your business.
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
                Schedule a Consultation
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SocialMediaPage;