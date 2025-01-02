import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';
import Video from './video';

const hero = () => {
  return (
    <div className=" mb-28">
        <div className='flex flex-col items-center md:justify-center'>
            <div className="relative flex items-center justify-center border border-cyan-300 rounded-full w-40 px-4 py-2 mb-8">
                <span className="relative flex items-center justify-center h-3 w-3 mr-3">
                    <span className="absolute h-full w-full rounded-full bg-cyan-100"></span>
                    <span className="absolute h-full w-full rounded-full bg-cyan-400 animate-blink-light"></span>
                </span>
                <p className='font-semibold text-white text-[12px]'>Only 2 spots left</p>
            </div>
            <h6 className='text-gray-300 md:text-xl text-center bg-gradient-to-r from-gray-100 via-gray-300 to-gray-600 bg-clip-text text-transparent'>
            Premium Content Marketing Agency
            </h6>
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className='text-white text-6xl md:text-[80px] font-bold leading-tight text-center '>
                WE MAKE BRANDS
            </motion.h1>
            <AnimatedText words={['Video editing', 'Web Development', 'Branding', 'Strategy', 'Marketing']} className='h-14 mb-4' />
        </div>
        <Video videoUrl="https://youtu.be/v6HGskhFksM?si=cmbCr8NxcNDhFVIW" className=''/>
    </div>
    
  )
}

export default hero