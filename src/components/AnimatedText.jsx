import{ useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const AnimatedText = ({ words, className = '' }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  
  useEffect(() => {
    const typingSpeed = 50;
    const deletingSpeed = 200;
    const pauseDuration = 1000;

    const animateText = () => {
      const currentWord = words[currentWordIndex];
      
      if (!isDeleting) {
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
          setIsPaused(false);
          return typingSpeed;
        } else {
          if (!isPaused) {
            setIsPaused(true);
            return pauseDuration;
          }
          setIsDeleting(true);
          setIsPaused(false);
          return deletingSpeed;
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
          return deletingSpeed;
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          return typingSpeed;
        }
      }
    };

    const timeout = setTimeout(() => {
      const delay = animateText();
      setTimeout(() => clearTimeout(timeout), delay);
    }, isDeleting ? 50 : isPaused ? pauseDuration : 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, isPaused]);

  return (
    <div className="flex">
      <h2 className={`text-4xl md:text-5xl font-semibold text-cyan-300 whitespace-nowrap ${className}`}>
        {currentText}
        {/* <span className="animate-pulse ml-0.5 font-medium">|</span> */}
      </h2>
    </div>
  );
};

AnimatedText.propTypes = {
  words: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string
};

export default AnimatedText;