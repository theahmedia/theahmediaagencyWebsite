import Faq from "../components/Faq.jsx"
import Contact from "../components/Contact.jsx"
import AboutAgency from "../components/AboutAgency.jsx";
import AboutHero from "../components/AboutHero.jsx";
import WhoWeAre from "../components/WhoWeAre.jsx";
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
const About = () => {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
         className="relative">
            <AboutHero />
            <div className="container mx-auto">
                <AboutAgency />
                <WhoWeAre />
                <Contact />
                <Faq />
            </div>
        </motion.div>
    );
};

export default About;
