import Hero from '../components/hero';
import Contact from '../components/Contact';
import VideoSlider from '../components/VideoSlider';
import Faq from '../components/Faq';
import WorkProcess from '../components/WorkProcess';
import OurWork from '../components/OurWork';
import Testimonial from '../components/Testimonial';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { 
      opacity: 0, 
    },
    visible: { 
      opacity: 1, 
      transition: { delay: 1.5, duration: 1.5 }
    },
    exit: {
      x: "-100vh",
      transition: { ease: 'easeInOut' }
    }
};

const Home = () => {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="container mx-auto"
        >
            <Hero />
            <VideoSlider />
            <WorkProcess />
            <OurWork />
            <Testimonial />
            <Contact />
            <Faq />
        </motion.div>
    );
};

export default Home;
