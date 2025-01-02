import { motion } from "framer-motion";
import { BsFillTriangleFill, BsFillGearFill, BsLayersFill, BsServer } from "react-icons/bs";
import { AiOutlineSun } from "react-icons/ai";

const AboutAgency = () => {
  return (
    <section className="relative overflow-auto text-white flex min-h-screen py-20">
      {/* Left Section - Sticky */}
      <div className="w-1/2 bg-slate-500 sticky top-10 self-start p-10">
          <h5 className="flex items-center gap-2 uppercase font-semibold mb-2">
            <AiOutlineSun className="text-xl text-cyan-300" /> About Agency
          </h5>
          <h2 className="text-5xl leading-tight">
            Crafting <span className="text-cyan-400 font-semibold">unique digital</span> experiences
            that elevate your brand
          </h2>
      </div>
      

      {/* Right Section - Stacked Content */}
      <div className="relative pl-10 w-1/2 grid grid-cols-1 gap-12">
        <div className="absolute left-[7.8px] z-0 h-full border-l border-gray-800"></div>
        {[
          {
            icon: <BsFillTriangleFill className="text-cyan-400 text-4xl" />,
            title: "Your Success, Our Mission",
            description:
              "We measure our success by the success of our clients. With a focus on results and a dedication to quality, our mission is to deliver digital solutions that make a real impact.",
          },
          {
            icon: <BsFillGearFill className="text-cyan-400 text-4xl" />,
            title: "Creators Of Digital Excellence",
            description:
              "At the core of our agency is a commitment to excellence and creativity. We specialize in crafting digital solutions that not only meet your needs but also elevate your brand.",
          },
          {
            icon: <BsLayersFill className="text-cyan-400 text-4xl" />,
            title: "Innovating the Digital Landscape",
            description:
              "Our agency thrives on crafting innovative digital solutions. We tailor strategies that exceed expectations and position your brand at the forefront of the digital landscape.",
          },
          {
            icon: <BsServer className="text-cyan-400 text-4xl" />,
            title: "Helping Brands Thrive Online",
            description:
              "Our purpose is simple: to help brands succeed in the digital age. We're passionate about building strong relationships with our clients and crafting custom strategies that drive results.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center md:items-start text-center md:text-left gap-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.6 }}
          >
            {/* Icon */}
            <div>{item.icon}</div>

            {/* Text Content */}
            <div>
              <h3 className="text-xl font-semibold mb-2 relative before:content-[''] before:w-[6px] before:h-[6px] before:rounded-full before:bg-cyan-400 before:absolute before:-left-[35px] before:top-1/2 before:-translate-y-1/2 before:z-20 after:content-[''] after:w-4 after:h-4 after:rounded-full after:bg-transparent after:border after:border-cyan-400 after:absolute after:-left-[40px] after:top-1/2 after:-translate-y-1/2 after:z-10 ">
                {item.title}
              </h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutAgency;