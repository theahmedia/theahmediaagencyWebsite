import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaStar, FaRegStar } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

// Testimonials Data
const testimonials = [
  {
    id: 1,
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, magnam porro, distinctio!",
    author: "John Doe",
    position: "CEO, Example Co.",
    rating: 5,
  },
  {
    id: 2,
    video: "https://www.w3schools.com/html/movie.mp4",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, magnam porro, distinctio inventore!",
    author: "Jane Smith",
    position: "Manager, Business Inc.",
    rating: 4,
  },
  {
    id: 3,
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, magnam porro, distinctio inventore!",
    author: "Emily Davis",
    position: "Freelancer",
    rating: 5,
  },
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // New state to control slider pause

  let sliderInterval;

  // Auto-slide every 5 seconds if not paused
  useEffect(() => {
    if (!isPaused) {
      sliderInterval = setInterval(() => {
        handleNext();
      }, 5000);
    }
    return () => clearInterval(sliderInterval);
  }, [isPaused, current]);

  // Navigate to next slide
  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  // Navigate to previous slide
  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Pause slider animation when video starts
  const handleVideoPlay = () => {
    setIsPaused(true);
  };

  // Resume slider animation when video ends
  const handleVideoEnd = () => {
    setIsPaused(false);
  };

  // Navigate to specific slide using dots
  const handleDotClick = (index) => {
    setCurrent(index);
  };

  return (
    <div className="container py-10">
      <div className="text-center mb-8">
        <h1 className="text-7xl font-bold pb-2 bg-gradient-to-l from-gray-100 via-cyan-300 to-cyan-600 bg-clip-text text-transparent mb-4">
          What Our Client<br /> Says
        </h1>
      </div>
      <div className="relative flex items-center justify-center overflow-hidden">
        <div className="relative w-full max-w-5xl bg-gradient-to-br from-[#17181c] to-[#30333d] h-full p-6 bg-transparent rounded-lg shadow-lg">
          {/* Animate Presence for Animating Slides */}
          <AnimatePresence>
            {testimonials.map((testimonial, index) =>
              index === current ? (
                <div key={testimonial.id} className="w-full text-center grid grid-cols-2 items-center gap-8">
                  {/* Video with Easing */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 1,
                      ease: [0.6, -0.05, 0.01, 0.99],
                    }}
                    className="relative w-full mb-4"
                  >
                    <video
                      controls
                      muted
                      onPlay={handleVideoPlay} // Pause slider
                      onEnded={handleVideoEnd} // Resume slider
                      className="w-full h-64 object-cover rounded-lg"
                    >
                      <source src={testimonial.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </motion.div>

                  <div>
                    {/* Content with Staggered Animation */}
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      variants={{
                        visible: { transition: { staggerChildren: 0.3 } },
                        hidden: {},
                      }}
                      className="flex flex-col items-center justify-between rounded-xl w-[450px] h-44 px-8 py-6"
                    >
                      {/* Testimonial Text */}
                      <motion.p
                        className="text-sm italic text-white"
                        variants={{
                          hidden: { opacity: 0, y: -30 },
                          visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 1 }}
                      >
                        {`"${testimonial.text}"`}
                      </motion.p>

                      <div className="flex items-end">
                        {/* Client Image */}
                        <motion.img
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="w-14 h-14 mr-2 object-cover rounded-full border-2 border-gray-300"
                          variants={{
                            hidden: { opacity: 0, y: -20 },
                            visible: { opacity: 1, y: 0 },
                          }}
                          transition={{ duration: 1 }}
                        />
                        {/* Author Info */}
                        <motion.div
                          variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                          }}
                          transition={{ duration: 0.5 }}
                          className="mt-2 text-left"
                        >
                          {/* Rating Stars */}
                          <motion.div
                            className="flex justify-start mb-2"
                            variants={{
                              hidden: { opacity: 0, scale: 0.8 },
                              visible: { opacity: 1, scale: 1 },
                            }}
                          >
                            {Array.from({ length: 5 }, (_, i) =>
                              i < testimonial.rating ? (
                                <FaStar key={i} className="text-yellow-400" />
                              ) : (
                                <FaRegStar key={i} className="text-yellow-400" />
                              )
                            )}
                          </motion.div>
                          <h4 className="text-white font-semibold">
                            {testimonial.author}
                          </h4>
                          <p className="text-sm text-gray-500">
                            {testimonial.position}
                          </p>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              ) : null
            )}
          </AnimatePresence>

          {/* Dots Navigation */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === current ? "bg-cyan-500" : "bg-gray-400"
                }`}
              ></button>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-600 hover:text-gray-800 z-10"
        >
          <FaChevronLeft size={30} />
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-600 hover:text-gray-800 z-10"
        >
          <FaChevronRight size={30} />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
