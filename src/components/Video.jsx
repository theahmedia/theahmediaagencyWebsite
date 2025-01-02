import { useState } from 'react';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';
import { FaPlay } from 'react-icons/fa';

const Video = ({ videoUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex mx-auto justify-center items-center bg-transparent rounded-3xl text-white relative cursor-pointer max-w-[920px] h-64 md:h-[480px]" onClick={handleOpenModal}>
        <div className="max-w-[920px] h-60 md:h-[480px] w-full rounded-3xl overflow-hidden">
          <ReactPlayer 
            url={videoUrl} 
            playing 
            loop 
            muted 
            width="100%" 
            height="100%" 
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black bg-opacity-40 p-4 rounded-full">
            <FaPlay className="w-12 h-12 text-white" />
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              onClick={handleCloseModal}
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <ReactPlayer 
              url={videoUrl} 
              playing 
              controls 
              width="100%" 
              height="100%" 
            />
          </div>
        </div>
      )}
    </>
  );
};

Video.propTypes = {
  videoUrl: PropTypes.string.isRequired,
};
export default Video;



