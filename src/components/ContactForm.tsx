import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    // Construct mailto URL with form data
    const { name, email, phone, service, message } = formData;
    const subject = encodeURIComponent('Business Contact Form Submission');
    const body = encodeURIComponent(
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone}\n` +
      `Service: ${service}\n` +
      `Message: ${message}`
    );
    const mailtoLink = `mailto:FictionDigitall@gmail.com?subject=${subject}&body=${body}`;
    
    try {
      // Open mailto link in a new window to encourage sending
      window.open(mailtoLink, '_blank');
      
      // Show success message and reset form
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
        setTimeout(() => setSubmitted(false), 12000); // 12s for visibility
      }, 1500);
    } catch (err) {
      // Handle mailto failure
      setTimeout(() => {
        setIsSubmitting(false);
        setError(
          'Unable to open email client. Please manually send the following details to FictionDigitall@gmail.com:\n\n' +
          `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nMessage: ${message}`
        );
      }, 1500);
    }
  };
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
      {!submitted ? (
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold text-center text-gray-700 dark:text-gray-200 mb-6">
            Contact Us 
          </h2>
          {/* <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 text-center font-medium">
            Please fill out the form and click "Send Message." Your email app will open—<strong>click "Send" to deliver your details to us</strong>. If it doesn’t open, copy the details and email them to FictionDigitall@gmail.com.
          </p> */}
          
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Soeel Beg"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="FictionDigitall@gmail.com"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="9511510837"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
              Service Interested In
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="">Select a service</option>
              <option value="video-shooting">Video Shooting</option>
              <option value="video-editing">Video Editing</option>
              <option value="graphic-design">Graphic Design</option>
              <option value="social-media">Social Media Handling</option>
              <option value="web-design">Web Design</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
              placeholder="Tell us about your project..."
            ></textarea>
          </div>
          
          {error && (
            <div className="text-red-500 text-sm bg-red-100 dark:bg-red-900 p-4 rounded-lg">
              <p>{error}</p>
              <button
                type="button"
                className="mt-2 text-blue-500 underline hover:text-blue-700"
                onClick={() => navigator.clipboard.writeText(error.split('Please manually send the following details to FictionDigitall@gmail.com:\n\n')[1])}
              >
                Copy Details to Clipboard
              </button>
            </div>
          )}
          
          <motion.button
            type="submit"
            className="w-full bg-indigo-600 text-white px-4 py-3 rounded-lg hover:bg-indigo-700 disabled:bg-indigo-400 flex justify-center items-center"
            disabled={isSubmitting}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </>
            ) : (
              'Send Message'
            )}
          </motion.button>
        </motion.form>
      ) : (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-500 mb-6">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-2">Message Prepared!</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Your email app should have opened with a message to FictionDigitall@gmail.com. <strong>Please click "Send" to deliver your details.</strong> If it didn’t open or you closed it, please check your Drafts folder, open the email, and click "Send". Alternatively, copy the details and email them to FictionDigitall@gmail.com.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="border border-gray-300 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Send Another Message
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default ContactForm;