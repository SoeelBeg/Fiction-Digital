import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  delay?: number;
}

const ServiceCard = ({ title, description, icon, link, delay = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className="card p-6 flex flex-col h-full card-hover"
    >
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg blur-lg transform -rotate-6 scale-110 opacity-70"></div>
        <div className="relative p-4 bg-white dark:bg-gray-800 rounded-lg shadow-inner-glow">
          <div className="text-indigo-600 dark:text-indigo-400">
            {icon}
          </div>
        </div>
      </div>
      
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">{description}</p>
      
      <Link 
        to={link}
        className="mt-auto inline-flex items-center font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
      >
        Learn More
        <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;