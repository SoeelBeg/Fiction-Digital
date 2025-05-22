import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  cta?: string;
  ctaLink?: string;
}

const HeroSection = ({
  title,
  subtitle,
  imageSrc,
  cta,
  ctaLink = "/contact",
}: HeroSectionProps) => {
  return (
    <section className="pt-24 lg:pt-32 pb-12 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="gradient-text">{title}</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {subtitle}
            </p>
            {cta && (
              <div className="pt-4">
                <motion.a
                  href={ctaLink}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-primary inline-block"
                >
                  {cta}
                </motion.a>
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={imageSrc}
                alt="Hero Image"
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-200 dark:bg-indigo-900/30 rounded-full blur-3xl opacity-60 z-0"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-teal-200 dark:bg-teal-900/30 rounded-full blur-3xl opacity-60 z-0"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;