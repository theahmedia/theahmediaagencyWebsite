import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { triggerOnce: false, threshold: 0.1 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: .8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{
                duration: 3,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }} 
            className="container mx-auto p-2 sm:px-4 md:px-16 py-14 bg-gradient-to-br from-black to-gray-800 rounded-3xl"
        >
            <div className="grid lg:grid-cols-5 items-center">
                <div className="lg:col-span-3 pr-8 border-b mb-8 border-gray-700 lg:border-b-0 lg:border-r">
                    <h3 className="text-3xl md:text-5xl leading-tight lg:leading-snug text-center lg:text-left mb-8">
                        Success is a team play, right? <span className="text-gray-400">Let’s work <br/> together!</span>
                    </h3>
                </div>
                <div className="lg:col-span-2 pl-8 text-center">
                    <h2 className="text-2xl md:text-4xl font-bold mb-2">More Than Just Videos</h2>
                    <p className="text-sm md:text-xl mb-4">We&apos;re Your Creative Partners!</p>
                    <button className="relative p-2 md:p-3 px-6 md:px-8 text-xl text-white font-medium 
                            bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-500 
                            hover:from-cyan-400 hover:via-cyan-300 hover:to-cyan-400
                            rounded-full transition-all duration-300 ease-in-out
                            shadow-[0_0_20px_rgba(34,211,238,0.3)]
                            hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]"
                    >
                        Contact Us
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;