import { motion } from 'framer-motion';
import { Video,  Video as VideoRecorder, Clapperboard, } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroSection from '../../components/HeroSection';
import ServiceFeature from '../../components/ServiceFeature';
import heroImage from '../../images/2.jpg';

const VideoShootingPage = () => {
  const features = [
    {
      title: "Reels Production",
      description: "Professional shooting of short-form vertical videos optimized for social media platforms.",
      icon: <Video className="w-5 h-5" />
    },
    {
      title: "YouTube Video Production",
      description: "High-quality shooting services for long-form content.",
      icon: <VideoRecorder className="w-5 h-5" />
    },
    {
      title: "Business Video Production",
      description: "We make retailers, wholesalers brand video, cafe promotion, restaurants and hotels will create promotion videos and provide high quality videos.",
      icon: <Clapperboard className="w-5 h-5" />
    },
    // {
    //   title: "Professional Equipment",
    //   description: "Top-of-the-line cameras, lighting, and sound equipment for the highest quality production.",
    //   icon: <Camera className="w-5 h-5" />
    // },
    // {
    //   title: "Experienced Team",
    //   description: "Skilled camera operators, lighting technicians, and directors ensuring professional results.",
    //   icon: <Users className="w-5 h-5" />
    // }
  ];

  // const heroImage = "https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  return (
    <>
      <HeroSection
        title="Video Shooting Services"
        subtitle="Professional video shooting for reels, YouTube videos, and business content."
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
              Our Video Shooting Services
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-600 dark:text-gray-300 text-lg text-center mb-12"
            >
              We specialize in creating high-quality,engaging video content tailored to your vision and goals.your story is captured with creativity,technical expertise, and professionalism.
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
              Ready to Create Amazing Videos?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl mb-8 text-indigo-100"
            >
              Let's bring your vision to life with our professional video shooting services.
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

export default VideoShootingPage;