import { motion } from 'framer-motion';

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  companyLogo?: string;
  index?: number;
}

const Testimonial = ({ quote, author, position, companyLogo, index = 0 }: TestimonialProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg relative"
    >
      {/* Quote mark */}
      <div className="absolute -top-6 -left-2 text-6xl text-indigo-200 dark:text-indigo-900/60">"</div>
      
      <div className="relative z-10">
        <p className="text-gray-700 dark:text-gray-300 mb-6 italic">{quote}</p>
        
        <div className="flex items-center">
          <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold text-xl mr-4">
            {author.charAt(0)}
          </div>
          
          <div>
            <h4 className="font-bold text-gray-800 dark:text-gray-100">{author}</h4>
            <p className="text-gray-500 dark:text-gray-400 text-sm">{position}</p>
          </div>
          
          {companyLogo && (
            <img src={companyLogo} alt="Company logo" className="h-8 ml-auto" />
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonial;