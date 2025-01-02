import { useRef } from "react"
import Logo from "../assets/logo.png"
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter  } from "react-icons/fa"
import { motion, useInView } from "motion/react"

const Footer = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { triggerOnce: false, threshold: 0.1 });

    return (
        <motion.div 
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        className="container mx-auto overflow-hidden">
            <div className="bg-gradient-to-r from-gray-200 to-cyan-600 80% rounded-[20px] px-8 py-4 mb-6 flex items-center justify-between">
                <div className="h-8 w-auto">
                    <img src={ Logo } className="w-full h-full" alt="" />
                </div>
                <div className="">
                    <ul className="flex items-center">
                        <li className="px-2 py-1 border-r border-gray-300 ">
                            <a href="" className="text-white hover:text-sky-600">
                                < FaFacebook  size={20} />
                            </a>
                        </li>
                        <li className="px-2 py-1 border-r border-gray-300 ">
                            <a href="" className="text-white hover:text-red-500">
                                < FaInstagram size={20} />
                            </a>
                        </li>
                        <li className="px-2 py-1 border-r border-gray-300 ">
                            <a href="" className="text-white hover:text-sky-700">
                                < FaLinkedinIn size={20} />
                            </a>
                        </li>
                        <li className="px-2 py-1 border-r border-gray-300 ">
                            <a href="" className="text-white hover:text-cyan-400">
                                < FaTwitter  size={20} />
                            </a>
                        </li>
                        <li className="px-2"><a href="" className=" text-white hover:text-cyan-400
                        ">Tarms & Service</a></li>
                    </ul>
                </div>
            </div>
        </motion.div>
    )
}

export default Footer