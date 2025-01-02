import { motion } from "framer-motion";
import backgroundImage from "../assets/work.png";

const WorkHero = () => {
    const letterVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { type: 'spring', duration: 0.05, ease: [0.25, 0.1, 0.25, 1] }, // Smooth cubic-bezier easing
        },
      };
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8,delay: 0.8, ease: "easeOut" },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };
  const title = "Welcome to Our Works";

  return (
    <motion.div
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.8, ease: "linear" }}
      className="relative w-full flex items-center justify-center bg-cover bg-bottom py-36"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >

      {/* Animated Content */}
      <motion.div
        className="relative text-center text-white z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold flex justify-center"
          variants={containerVariants}
        >
          {title.split("").map((letter, index) => (
            <motion.span
              key={index}
              className="inline-block"
              variants={letterVariants}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-xl"
          variants={textVariants}
        >
          Discover our latest projects and creative endeavors.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default WorkHero;
