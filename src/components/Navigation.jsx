import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiX } from 'react-icons/fi';
import { RiMenu3Fill } from "react-icons/ri";
import logo from '../assets/logo.png';
import { motion } from 'framer-motion';

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    // Handle click outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Handle menu item click
    const handleMenuClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <motion.nav 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 20,
                duration: 0.8
            }}
            className='bg-[#040914] w-full mx-auto top-0 left-0 z-50 shadow-[0_4px_12px_rgba(0,0,0,0.3)] relative'
        >
            <div className='container mx-auto'>
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className='flex justify-between items-center px-4 py-3'
                >
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex items-center">
                            <img 
                                src={logo} 
                                alt="Logo" 
                                className="h-8 w-auto"
                            />
                        </Link>
                    </div>

                    <div className='hidden lg:flex text-lg font-normal flex-row space-x-8 items-center justify-center'>
                        {['Home', 'About', 'Work', 'Blog'].map((item, index) => (
                            <motion.div
                                key={item}
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ 
                                    delay: 0.4 + index * 0.1,
                                    duration: 0.5
                                }}
                            >
                                <Link 
                                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                                    className="text-gray-300 hover:text-cyan-300 transition-colors"
                                >
                                    {item}
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div 
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        className="flex items-center space-x-4"
                    >
                        <button className="relative p-2 px-4 text-white font-medium 
                            bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-500 
                            hover:from-cyan-400 hover:via-cyan-300 hover:to-cyan-400
                            rounded-full transition-all duration-300 ease-in-out
                            shadow-[0_0_20px_rgba(34,211,238,0.3)]
                            hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]
                            transform hover:scale-105
                            overflow-hidden
                            before:content-['']
                            before:absolute
                            before:w-12
                            before:h-full
                            before:top-0
                            before:left-0
                            before:bg-gradient-to-r
                            before:from-transparent
                            before:via-white/20
                            before:to-transparent
                            before:skew-x-[45deg]
                            before:translate-x-[-200%]
                            hover:before:translate-x-[200%]
                            before:transition-transform
                            before:duration-700
                            "
                        >
                            Get Started
                        </button>
                        <button 
                            className="lg:hidden p-2 text-gray-300 hover:bg-gray-800 hover:text-white rounded-full transition-colors"
                            onClick={() => {
                                setIsMenuOpen(!isMenuOpen);
                            }}
                        >
                            {isMenuOpen ? 
                                <FiX className="w-6 h-6" /> : 
                                <RiMenu3Fill className="w-6 h-6" />
                            }
                        </button>
                    </motion.div>
                </motion.div>
            </div>

            <motion.div 
                ref={menuRef}
                initial={false}
                animate={{
                    height: isMenuOpen ? 'auto' : 0,
                    opacity: isMenuOpen ? 1 : 0
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut"
                }}
                className={`lg:hidden absolute top-full left-0 right-0 bg-gray-900 shadow-lg overflow-hidden`}
            >
                <div className="container mx-auto">
                    <div className="flex flex-col p-4 space-y-3">
                        {['Home', 'About', 'Work', 'Blog'].map((item, index) => (
                            <motion.div
                                key={item}
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.1 * index }}
                            >
                                <Link 
                                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                    className="text-gray-300 hover:text-cyan-300 transition-colors"
                                    onClick={handleMenuClick}
                                >
                                    {item}
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.nav>
    )
}

export default Navigation
