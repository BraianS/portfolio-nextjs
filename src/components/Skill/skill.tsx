import { DocumentArrowDownIcon } from "@heroicons/react/24/solid";
import GradientLine from "../GradientLine";
import { motion, Variants } from "framer-motion";

export default function Skills() {
  const skills = [
    { name: "JavaScript", level: 90, icon: "js" },
    { name: "React", level: 85, icon: "react" },
    { name: "Next.js", level: 80, icon: "next" },
    { name: "Node.js", level: 75, icon: "node" },
    { name: "Tailwind CSS", level: 85, icon: "tailwind" },
    { name: "TypeScript", level: 70, icon: "ts" },
  ];

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12
      }
    }
  };

  const progressVariants: Variants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.2,
        delay: 0.3,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  const iconVariants: Variants = {
    hover: {
      rotate: [0, 10, -10, 0],
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="skills" className="py-16">
      <motion.div 
        className="flex flex-col h-full justify-center items-center p-8 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Title Section */}
        <motion.div className="w-full mb-12 text-center" variants={cardVariants}>
          <h3 className="text-4xl md:text-5xl font-bold mb-4">My Skills</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies I work with daily
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              variants={cardVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <motion.div 
                  className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#FFB521] to-[#F99869] flex items-center justify-center text-white"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <span className="text-xl font-bold">{skill.icon}</span>
                </motion.div>
                <div>
                  <h4 className="font-bold text-lg">{skill.name}</h4>
                  <span className="text-gray-500">{skill.level}%</span>
                </div>
              </div>
              <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-[#FFB521] to-[#F99869]"
                  variants={progressVariants}
                  custom={skill.level}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}