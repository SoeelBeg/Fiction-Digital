import { motion } from 'framer-motion';

interface ServiceFeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const ServiceFeature = ({ title, description, icon, index }: ServiceFeatureProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex items-start space-x-4 p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg"
    >
      <div className="flex-shrink-0 p-3 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
};

export default ServiceFeature;