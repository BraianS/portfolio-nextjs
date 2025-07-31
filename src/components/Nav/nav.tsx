import { motion, Variants } from "framer-motion";
import { useState } from "react";

import data from "../../data/data.json";
import { EnvelopeIcon,MinusIcon } from "@heroicons/react/24/outline";

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navItems = data.nav.items;

  // Animation variants
  const itemVariants:Variants = {
    hidden: { y: -20, opacity: 0 },
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

  const mobileMenuVariants:Variants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3 }
    }
  };

  return (
    <nav className="bg-[var(--primary-background)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="flex h-16 items-center justify-between"
          initial="hidden"
          animate="visible"
          variants={itemVariants}
        >
          {/* Logo */}
          <div className="flex-shrink-0">
            <motion.img 
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" 
              alt="Logo" 
              className="h-8 w-auto"
              whileHover={{ scale: 1.1 }}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <motion.div 
              className="flex space-x-8"
              variants={itemVariants}
            >
              {navItems.map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-md font-medium text-gray-500 hover:text-[#FFB521] transition-colors"
                  whileHover={{ y: -2 }}
                >
                  {item}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 text-gray-500 hover:text-[#FFB521] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <EnvelopeIcon className="h-6 w-6" />
              ) : (
                <MinusIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </motion.div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden"
            initial="hidden"
            animate={mobileMenuOpen ? "visible" : "hidden"}
            variants={mobileMenuVariants}
          >
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navItems.map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-[#FFB521]"
                  onClick={() => setMobileMenuOpen(false)}
                  whileHover={{ x: 5 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}