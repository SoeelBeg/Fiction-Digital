import { motion } from 'framer-motion';
import { PenTool, Layers, Image, PackageOpen, Palette, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroSection from '../../components/HeroSection';
import ServiceFeature from '../../components/ServiceFeature';

const GraphicDesignPage = () => {
  const features = [
    {
      title: "Logo & Branding Design",
      description: "Professional logos, business cards, letterheads, and comprehensive brand guidelines.",
      icon: <Palette className="w-5 h-5" />
    },
    {
      title: "Social Media Graphics",
      description: "Engaging visuals for social platforms including posts, banners, and profile materials.",
      icon: <Image className="w-5 h-5" />
    },
    {
      title: "Print Materials",
      description: "Eye-catching designs for hoardings, visiting cards, pamphlets, and menus.",
      icon: <Layers className="w-5 h-5" />
    },
    {
      title: "Packaging Design",
      description: "Creative packaging solutions and merchandise design to enhance product presentation.",
      icon: <PackageOpen className="w-5 h-5" />
    }
  ];
  
  const heroImage = "https://images.pexels.com/photos/6444/pencil-typography-black-design.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  
  return (
    <>
      <HeroSection
        title="Graphic Design Services"
        subtitle="Creative graphic design solutions for your brand including logos, social media assets, print materials, and packaging."
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
              Our Design Services
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-600 dark:text-gray-300 text-lg text-center mb-12"
            >
              We create visually stunning and strategically effective designs that help your brand stand out and communicate clearly.
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
      
      {/* Design Process */}
      <section className="section bg-gray-50 dark:bg-gray-800">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Our Design Process
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg relative"
            >
              <div className="absolute -top-5 -left-5 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 mt-2">Discovery</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We learn about your brand, goals, target audience, and competitors to inform our design strategy.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg relative"
            >
              <div className="absolute -top-5 -left-5 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 mt-2">Concept</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We develop initial concepts and ideas based on our research, presenting you with strong creative directions.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg relative"
            >
              <div className="absolute -top-5 -left-5 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 mt-2">Refinement</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Based on your feedback, we refine the selected concept, perfecting every detail to meet your vision.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg relative"
            >
              <div className="absolute -top-5 -left-5 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                4
              </div>
              <h3 className="text-xl font-bold mb-3 mt-2">Delivery</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We provide finalized designs in all required formats, ensuring they're ready for immediate use across platforms.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Portfolio Showcase */}
      {/* <section className="section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Design Portfolio
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-xl overflow-hidden shadow-lg h-full"
              >
                <img 
                  src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Branding Project" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col justify-center"
            >
              <h3 className="text-xl font-bold mb-4">Luxury Brand Identity</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Complete branding package for a high-end jewelry company, including logo design, packaging, and marketing materials.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm">Branding</span>
                <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm">Packaging</span>
                <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm">Print</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col justify-center"
            >
              <h3 className="text-xl font-bold mb-4">Restaurant Menu Design</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Modern, elegant menu design for a high-end restaurant with custom typography and photography.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm">Menu</span>
                <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm">Typography</span>
                <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm">Layout</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <img 
                src="https://images.pexels.com/photos/5626266/pexels-photo-5626266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Social Media Campaign" 
                className="w-full h-full object-cover"
              />
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
              Let's Design Something Amazing Together
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl mb-8 text-indigo-100"
            >
              Whether you need a new brand identity, packaging design, or social media graphics, our team is ready to bring your vision to life.
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
                Start Your Design Project
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GraphicDesignPage;