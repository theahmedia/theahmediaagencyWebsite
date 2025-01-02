import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

const WorksSlider = ({ videos, videoClass }) => {
    const videoRefs = useRef(videos.map(() => React.createRef())); // Create refs for each video
    const [playStates, setPlayStates] = useState(
        videos.reduce((acc, video) => ({ ...acc, [video.id]: true }), {})
    );
    const [currentPlaying, setCurrentPlaying] = useState(null); // Track the currently playing video ID

    const handlePlayToggle = (id, index) => {
        const videoRef = videoRefs.current[index].current;

        // Pause the currently playing video, if any
        if (currentPlaying !== null && currentPlaying !== id) {
        const currentVideoRef = videoRefs.current.find(
            (ref, idx) => videos[idx].id === currentPlaying
        )?.current;
        if (currentVideoRef) {
            currentVideoRef.pause();
            setPlayStates((prev) => ({ ...prev, [currentPlaying]: true }));
        }
        }

        // Toggle the play/pause state of the clicked video
        if (playStates[id]) {
            videoRef.play();
            setPlayStates((prev) => ({ ...prev, [id]: false }));
            setCurrentPlaying(id); // Set the new playing video
        } else {
            videoRef.pause();
            setPlayStates((prev) => ({ ...prev, [id]: true }));
            setCurrentPlaying(null);
        }
    };

    const handleVideoEvent = (id) => {
        setPlayStates((prev) => ({ ...prev, [id]: true }));
        if (currentPlaying === id) {
        setCurrentPlaying(null); // Clear the currently playing video if it ends
        }
    };

    return (
        <div className="flex items-center justify-center">
            <div className="w-full p-6">
                <Splide
                options={{
                    type: "loop",
                    autoplay: false,
                    interval: 3000,
                    perPage: 3, // Default perPage for large screens
                    perMove: 1,
                    gap: "1rem",
                    arrows: false,
                    pagination: false,
                    breakpoints: {
                    640: { perPage: 1 }, 
                    1024: { perPage: 2 }, 
                    1200: { perPage: 3 }, 
                    },
                    autoScroll: { speed: 0.5 },
                }}
                extensions={{ AutoScroll }}
                aria-label="Works Slider"
                >
                {videos.map((video, index) => (
                    <SplideSlide key={video.id}>
                        <div className={`relative w-full ${videoClass}`}>
                            <video
                                className="w-full h-full object-cover"
                                ref={videoRefs.current[index]}
                                onEnded={() => handleVideoEvent(video.id)}
                                onPause={() => handleVideoEvent(video.id)}
                                src={video.src}
                            >
                            Your browser does not support the video tag.
                            </video>
                            {playStates[video.id] && (
                            <div
                                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 cursor-pointer w-24 h-16 rounded-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                onClick={() => handlePlayToggle(video.id, index)}
                            >
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="white"
                                viewBox="0 0 24 24"
                                width="60px"
                                height="60px"
                                >
                                <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                            )}
                        </div>
                    </SplideSlide>
                ))}
                </Splide>
            </div>
        </div>
    );
};

WorksSlider.propTypes = {
    videos: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.number.isRequired,
        src: PropTypes.string.isRequired,
        title: PropTypes.string,
        })
    ).isRequired,
    videoClass: PropTypes.string,
};

WorksSlider.defaultProps = {
    videoClass: "h-64",
};

export default WorksSlider;
