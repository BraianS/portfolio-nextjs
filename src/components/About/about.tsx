import GradientLine from "../GradientLine";
import data from "../../data/data.json";
import { Title } from "../Title";
import { motion, Variants } from "framer-motion";

export default function About() {
  // Animation variants
  const container:Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item:Variants = {
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

  const fadeIn:Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section id="about" className="py-16">
      <motion.div 
        className="flex flex-col h-full justify-center items-center p-8 max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
      >
        {/* Top Section - Location & Birth Date */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 text-center mb-8 w-full">
          <motion.div 
            className="flex-1 flex flex-col items-center"
            variants={item}
          >
            <h4 className="text-3xl md:text-4xl font-bold mb-2">Born In</h4>
            <p className="text-lg text-gray-600 dark:text-gray-300">{data.about.location}</p>
          </motion.div>
          
          <motion.div 
            className="flex-1 flex flex-col items-center"
            variants={item}
          >
            <h5 className="text-3xl md:text-4xl font-bold mb-2">Date of Birth</h5>
            <p className="text-lg text-gray-600 dark:text-gray-300">{data.about.birthDate}</p>
          </motion.div>
        </div>

        {/* Gradient Line */}
        <motion.div variants={fadeIn}>
          <GradientLine gradient={true} className="my-8 w-full max-w-md" />
        </motion.div>

        {/* Bottom Section - About Me */}
        <motion.div 
          className="flex flex-col items-center text-center w-full mb-8"
          variants={item}
        >
          <Title title="About Me"/>
          
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mb-8"
            variants={item}
          >
            {data.about.description}
          </motion.p>
          
          {/* GitHub Button */}
          <motion.a
            href="https://github.com/braians"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            variants={item}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 group-hover:scale-110 transition-transform"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span className="font-medium">Visit My GitHub</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 20 20" 
              fill="currentColor" 
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
            >
              <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
            </svg>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}