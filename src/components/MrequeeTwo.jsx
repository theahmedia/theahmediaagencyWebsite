import { useState } from "react";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";

const Modal = ({ isOpen, onClose, videos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen) return null;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="relative w-full h-full">
        <button
          className="absolute top-5 right-5 text-white text-2xl"
          onClick={onClose}
        >
          <FaTimes />
        </button>

        <div className="flex flex-col items-center justify-center h-full">
          <div className="relative w-full max-w-4xl h-[80vh] bg-white rounded-xl overflow-hidden">
            <div
              className="flex transition-transform duration-300"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {videos.map((video, index) => (
                <div
                  key={index}
                  className="w-full h-[80vh] flex-shrink-0 flex justify-center items-center"
                >
                  <iframe
                    className="w-full h-full rounded-md"
                    src={video.url.replace("watch?v=", "embed/")}
                    title={`Video ${index + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ))}
            </div>
            <button
              className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
              onClick={handlePrev}
            >
              &#10094;
            </button>
            <button
              className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
              onClick={handleNext}
            >
              &#10095;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

const Card = ({ title, description, bgColor, onButtonClick }) => {
  return (
    <div className="w-[470px]">
      <div
        className={`flex flex-col justify-between w-[450px] h-52 text-gray-900 px-10 py-6 rounded-3xl ${bgColor} flex-shrink-0`}
      >
        <div className="">
          <h3 className="text-2xl mb-3">{title}</h3>
          <p className="mb-2">{description}</p>
        </div>
        <div className="">
          <button
            className="relative p-2 px-5 text-sm text-white font-medium bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-500 
                            hover:from-cyan-400 hover:via-cyan-300 hover:to-cyan-400
                            rounded-full transition-all duration-300 ease-in-out
                            shadow-[0_0_20px_rgba(34,211,238,0.3)]
                            hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]
                            overflow-hidden"
            onClick={onButtonClick}
          >
            See Works
          </button>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

const MarqueeTwo = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalVideos, setModalVideos] = useState([]);
  const [modalTitle, setModalTitle] = useState("");

  const cards = [
    {
      title: "YouTube Videos:",
      description: "Editing Viral YouTube videos that create an impact and get you likes",
      bgColor: "bg-slate-100",
      videos: [
        { url: "https://youtube.com/embed/D_geaxwOP6g?si=POc-3gBCVXEwvpTf" },
        { url: "https://www.youtube.com/embed/iKXOVLlP5FU" },
      ],
    },
    {
      title: "Business Videos:",
      description: "Perfect video with a tailored touch of success, edited just for you.",
      bgColor: "bg-orange-100",
      videos: [
        { url: "https://youtube.com/embed/D_geaxwOP6g?si=POc-3gBCVXEwvpTf" },
        { url: "https://www.youtube.com/embed/iKXOVLlP5FU" },
      ],
    },
    {
      title: "Business Videos:",
      description: "Perfect video with a tailored touch of success, edited just for you.",
      bgColor: "bg-stone-100",
      videos: [
        { url: "https://youtube.com/embed/D_geaxwOP6g?si=POc-3gBCVXEwvpTf" },
        { url: "https://www.youtube.com/embed/iKXOVLlP5FU" },
      ],
    },
    {
      title: "Business Videos:",
      description: "Perfect video with a tailored touch of success, edited just for you.",
      bgColor: "bg-orange-100",
      videos: [
        { url: "https://youtube.com/embed/D_geaxwOP6g?si=POc-3gBCVXEwvpTf" },
        { url: "https://www.youtube.com/embed/iKXOVLlP5FU" },
      ],
    },
  ];

  const handleButtonClick = (videos, title) => {
    setModalVideos(videos);
    setModalTitle(title);
    setModalOpen(true);
  };

  return (
    <div className="overflow-hidden w-full relative">
      <div
        className="flex animate-marqueetwo"
        style={{
          width: `calc(${cards.length} * 470px * 2)`,
        }}
      >
        {[...cards, ...cards].map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            bgColor={card.bgColor}
            onButtonClick={() => handleButtonClick(card.videos, card.title)}
          />
        ))}
      </div>

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        videos={modalVideos}
        title={modalTitle}
      />
    </div>
  );
};

export default MarqueeTwo;
