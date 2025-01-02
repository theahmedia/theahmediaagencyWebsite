import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Mobile from "../assets/frame/mobile1.png"
import Laptop  from "../assets/frame/laptop.png"
import AnimatorsVideo from "../assets/videos/Animators.mp4";
import { FaPlay  } from "react-icons/fa";
import { useState, useRef } from "react";

const VideoSlider = () => {
  // Slider Settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
    appendDots: (dots) => (
      <div>
        <ul className="flex justify-center space-x-2 mt-4">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <button
        className="w-8 h-8 rounded-full bg-gray-500 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
        style={{ transform: "scale(1.5)" }}
      ></button>
    ),
    nextArrow: (
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/70 p-2 rounded-full shadow-lg text-black hover:bg-white focus:outline-none"
        aria-label="Next"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    ),
    prevArrow: (
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/70 p-2 rounded-full shadow-lg text-black hover:bg-white focus:outline-none"
        aria-label="Previous"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
    ),
  };

  const [isPlaying, setIsPlaying] = useState(false);

  const videoRef = useRef(null);

  // Function to handle play button click
  const handlePlayClick = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-[90%] max-w-5xl">
        <Slider {...settings}>
          {/* Slide 1 */}
          <motion.div
            className="relative flex items-center justify-center py-10"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src={ Mobile } className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[252px] h-[465px] -rotate-6" alt="" />
            <div className="relative w-[240px] h-[455px] mx-auto bg-black rounded-[34px] overflow-hidden shadow-lg -rotate-6">
              {!isPlaying && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 p-4 bg-cyan-400 rounded-full" onClick={handlePlayClick}>
                  <FaPlay size={20} className="rotate-6" />
                </div>
              )}
              <video
                ref={videoRef}
                className={`absolute inset-0 w-full h-full`}
                src={AnimatorsVideo}
                controls
                loading="lazy"
                aria-label="Video 1"
                onClick={handlePlayClick}
              />
            </div>
          </motion.div>

          {/* Slide 2 */}
          <motion.div
            className="relative flex items-center justify-center py-20"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[510px] h-[320px] pr-1 pt-[14px]">
              <img src={ Laptop } className="w-full h-full" alt="" />
            </div>
            
            <div className="relative w-[364px] h-[227px] mx-auto bg-black  shadow-lg overflow-hidden">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/hSpby3C78JM"
                title="Video 2"
                frameBorder="0"
                allow="fullscreen"
                loading="lazy"
                aria-label="Video 2"
              ></iframe>
            </div>
          </motion.div>

          {/* Slide 3 */}
          <motion.div
            className="relative flex items-center justify-center py-10"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <img src={ Mobile } className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[252px] h-[465px] rotate-6" alt="" />
            <div className="relative w-[240px] h-[455px] mx-auto bg-black rounded-[34px] overflow-hidden shadow-lg rotate-6">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/iKXOVLlP5FU"
                title="Video 3"
                frameBorder="0"
                allow="fullscreen"
                loading="lazy"
                aria-label="Video 3"
              ></iframe>
            </div>
          </motion.div>
        </Slider>
      </div>
    </div>
  );
};

export default VideoSlider;
