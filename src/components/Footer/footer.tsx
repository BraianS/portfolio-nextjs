import Portfolio from "../../data/data.json";
import GradientLine from "../GradientLine";
import { Navigation } from "../Navigation";
import { motion, Variants } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const navItems = Portfolio.nav.items;

  // Animation variants
  const containerVariants:Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants:Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 10
      }
    }
  };

  const fadeInVariants:Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };

  return (
    <motion.footer 
      className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16"
          variants={itemVariants}
        >
          <motion.h3 
            className="text-2xl font-bold text-gray-900 dark:text-white"
            variants={itemVariants}
          >
            Braian Silva
          </motion.h3>

          <Navigation 
            items={navItems}
            className="justify-center md:justify-end"
            linkClassName="text-md hover:text-[#FFB521] transition-colors"
          />
        </motion.div>

        {/* Middle Section */}
        <motion.div 
          className="flex flex-col items-center text-center gap-8 mb-16"
          variants={itemVariants}
        >
          <motion.h3 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white"
            variants={itemVariants}
          >
            Let's Build Something Amazing
          </motion.h3>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl"
            variants={itemVariants}
          >
            I'm available for freelance projects and collaborations. Get in touch!
          </motion.p>
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          className="pt-8"
          variants={fadeInVariants}
        >
          <GradientLine />
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-4">
            © {currentYear} Braian Silva. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}