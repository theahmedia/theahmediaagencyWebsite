// AboutHero.jsx
import { motion } from "framer-motion";

const AboutHero = () => {
  // Framer Motion Variants for Animation
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="relative bg-[#040914] text-white flex items-center justify-center px-8 py-20 overflow-hidden">
      {/* Background Gradient */}

      {/* Content */}
      <motion.div
        className="relative z-10 text-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Heading */}
        <motion.h1
  className="text-4xl md:text-6xl font-bold mb-6 overflow-y-hidden pb-2 leading-tight"
  initial="hidden"
  animate="visible"
  variants={{
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Controls the wave effect for words
      },
    },
  }}
>
  {[
    "Welcome",
    "to",
    "Our",
    "Digital",
    "Universe",
  ].map((word, index) => (
    <motion.span
      key={index}
      className="inline-block mr-2" // Adds space between words
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
    >
      {word}
    </motion.span>
  ))}
</motion.h1>





        {/* Subheading */}
        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-8"
          variants={item}
        >
          Discover how we craft innovative solutions to help your brand thrive
          in the digital age. Let’s create something extraordinary together.
        </motion.p>
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-10 left-20 w-40 h-40 bg-cyan-400 rounded-full blur-3xl opacity-30 z-0"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
      ></motion.div>
      <motion.div
        className="absolute top-0 right-10 w-60 h-60 bg-cyan-400 rounded-full blur-3xl opacity-30 z-0"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
      ></motion.div>
    </section>
  );
};

export default AboutHero;
