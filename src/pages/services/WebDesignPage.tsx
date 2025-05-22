import { motion } from 'framer-motion';
import { Monitor, Smartphone, ShoppingBag, Code, Database, Flag, AppWindow, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroSection from '../../components/HeroSection';
import ServiceFeature from '../../components/ServiceFeature';
import heroImage from '../../images/10.jpg';

const WebDesignPage = () => {
  const features = [
    {
      title: "Custom Website Design",
      description: "Bespoke website designs tailored to your brand, prioritizing user experience and visual appeal.",
      icon: <Monitor className="w-5 h-5" />
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile apps for iOS and Android, built for performance and scalability.",
      icon: <Smartphone className="w-5 h-5" />
    },
    {
      title: "Responsive Web Design",
      description: "Fully responsive websites that adapt seamlessly to all devices, ensuring optimal user experience.",
      icon: <AppWindow className="w-5 h-5" />
    },
    {
      title: "E-commerce Solutions",
      description: "Robust online stores with secure payments, inventory management, and app-based shopping features.",
      icon: <ShoppingBag className="w-5 h-5" />
    },
    {
      title: "CMS & App Integration",
      description: "Integration with CMS platforms (e.g., WordPress) and app backends for easy content and data management.",
      icon: <Database className="w-5 h-5" />
    },
    {
      title: "App & Web Maintenance",
      description: "Ongoing support for websites and apps, including updates, security, and performance optimization.",
      icon: <Code className="w-5 h-5" />
    },
    {
      title: "Landing Page & App Campaigns",
      description: "Conversion-driven landing pages and app store-optimized campaigns for marketing and lead generation.",
      icon: <Flag className="w-5 h-5" />
    },
    {
      title: "Cross-Platform App Development",
      description: "Efficient apps using frameworks like React Native and Flutter for iOS and Android compatibility.",
      icon: <Layers className="w-5 h-5" />
    }
  ];
  
  // const heroImage = "https://images.pexels.com/photos/326514/pexels-photo-326514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  
  return (
    <>
      <HeroSection
        title="Web & App Development"
        subtitle="Comprehensive web and mobile app development services to elevate your brand with cutting-edge, user-focused solutions."
        imageSrc={heroImage}
        alt="Web and App Development Hero"
      />
      
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold mb-6 text-center"
            >
              Our Web & App Development Services
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-600 dark:text-gray-300 text-lg text-center mb-12"
            >
              We deliver stunning websites and high-performance mobile apps that are functional, user-friendly, and optimized for growth.
            </motion.p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      
      {/* Technologies Section */}
      <section className="section bg-gray-50 dark:bg-gray-800">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Technologies We Use
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md text-center"
            >
              <div className="text-5xl text-indigo-600 mb-4">
                <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line></svg>
              </div>
              <h3 className="font-bold">React.js</h3>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md text-center"
            >
              <div className="text-5xl text-indigo-600 mb-4">
                <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line></svg>
              </div>
              <h3 className="font-bold">React Native</h3>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md text-center"
            >
              <div className="text-5xl text-indigo-600 mb-4">
                <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
              </div>
              <h3 className="font-bold">Flutter</h3>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md text-center"
            >
              <div className="text-5xl text-indigo-600 mb-4">
                <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
              </div>
              <h3 className="font-bold">Next.js</h3>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md text-center"
            >
              <div className="text-5xl text-indigo-600 mb-4">
                <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line></svg>
              </div>
              <h3 className="font-bold">Shopify</h3>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md text-center"
            >
              <div className="text-5xl text-indigo-600 mb-4">
                <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
              </div>
              <h3 className="font-bold">WordPress</h3>
            </motion.div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold mb-4">Our Development Process</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Our structured process ensures your website or app meets your business goals with exceptional quality and user experience.
                </p>
                <ol className="space-y-4">
                  <li className="flex">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center mr-3">1</span>
                    <div>
                      <h4 className="font-bold">Discovery & Planning</h4>
                      <p className="text-gray-600 dark:text-gray-300">Analyzing your goals, audience, and technical requirements.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center mr-3">2</span>
                    <div>
                      <h4 className="font-bold">Design & Prototyping</h4>
                      <p className="text-gray-600 dark:text-gray-300">Crafting wireframes and designs for web and app interfaces.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center mr-3">3</span>
                    <div>
                      <h4 className="font-bold">Development</h4>
                      <p className="text-gray-600 dark:text-gray-300">Building responsive websites and scalable apps with clean code.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center mr-3">4</span>
                    <div>
                      <h4 className="font-bold">Testing & Launch</h4>
                      <p className="text-gray-600 dark:text-gray-300">Rigorous testing for web and app functionality before deployment.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center mr-3">5</span>
                    <div>
                      <h4 className="font-bold">Maintenance & Support</h4>
                      <p className="text-gray-600 dark:text-gray-300">Continuous updates and support for both platforms.</p>
                    </div>
                  </li>
                </ol>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-xl overflow-hidden shadow-lg"
              >
                <img 
                  src="https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Web and App Development Process" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Portfolio Section */}
      {/* <section className="section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Recent Web & App Projects
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="E-commerce Website" 
                  className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                  <h3 className="text-white font-bold text-lg">Luxury E-commerce Store</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A Shopify-based e-commerce platform with a companion mobile app for seamless shopping on iOS and Android.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm">E-commerce</span>
                  <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm">Shopify</span>
                  <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm">React Native</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/4974920/pexels-photo-4974920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Fitness Mobile App" 
                  className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                  <h3 className="text-white font-bold text-lg">Fitness Mobile App</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A cross-platform fitness app with workout tracking, live classes, and integration with wearables, built using Flutter.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm">Mobile App</span>
                  <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm">Flutter</span>
                  <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm">Fitness</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Corporate Web & App" 
                  className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                  <h3 className="text-white font-bold text-lg">Corporate Web & App</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A React-based corporate website with a companion mobile app for client portals and real-time data dashboards.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm">Corporate</span>
                  <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm">React Native</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section> */}
      
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
              Ready for Your Web or App Project?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl mb-8 text-indigo-100"
            >
              Let's build a website or mobile app that drives results and enhances your brand's digital presence.
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
                Start Your Project
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebDesignPage;