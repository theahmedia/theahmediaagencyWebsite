import Faq from "../components/Faq.jsx"
import Contact from "../components/Contact.jsx"
import Blogs from "../components/Blogs.jsx";
import { motion } from 'framer-motion';
import backgroundImage from "../assets/work.png";

const Blog = () => {
    return (
        <div className="">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="relative w-full flex items-center justify-center bg-cover bg-center py-36"
                style={{ backgroundImage: `url(${backgroundImage})` }}
                >

                {/* Content */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                    <motion.h1
                    className="text-4xl md:text-5xl font-bold mb-4"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    >
                    Explore the World of Knowledge
                    </motion.h1>
                    <motion.p
                    className="text-lg md:text-xl mb-6"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    >
                    Discover insightful articles on Video Editing, Web Development, Branding, and more.
                    </motion.p>
                </div>
                </motion.div>
            <div className="container mx-auto">
                <Blogs />
                <Contact />
                <Faq />
            </div>
        </div>
    );
};

export default Blog;