import { useRef } from "react"
import { SiCilium } from "react-icons/si";
import { SlLayers } from "react-icons/sl";
import { TfiServer } from "react-icons/tfi";
import { AiOutlineInbox, AiOutlineAppstore, AiOutlineGlobal } from "react-icons/ai";
import { motion, useInView } from "motion/react"

const WorkProcess = () => {
	const ref = useRef(null);
    const isInView = useInView(ref, { triggerOnce: false, threshold: 0.1 });

	const steps = [
		{
			id: 1,
			icon: <SiCilium size={32} />,
			title: "We do our initial research",
			description: "Lorem ipsum dolor, sit amet consetur adipisicing elit. Laborsam a dolorem recusaae couuntur doribus posmus esse pariatur beatae."
		},
		{
			id: 2,
			icon: <SlLayers size={32} />,
			title: "We do our initial research",
			description: "Lorem ipsum dolor, sit amet consetur adipisicing elit. Laborsam a dolorem recusaae couuntur doribus posmus esse pariatur beatae."
		},
		{
			id: 3,
			icon: <TfiServer size={32} />,
			title: "We do our initial research",
			description: "Lorem ipsum dolor, sit amet consetur adipisicing elit. Laborsam a dolorem recusaae couuntur doribus posmus esse pariatur beatae."
		},
		{
			id: 4,
			icon: <AiOutlineInbox size={32} />,
			title: "We do our initial research",
			description: "Lorem ipsum dolor, sit amet consetur adipisicing elit. Laborsam a dolorem recusaae couuntur doribus posmus esse pariatur beatae."
		},
		{
			id: 5,
			icon: <AiOutlineAppstore size={32} />,
			title: "We do our initial research",
			description: "Lorem ipsum dolor, sit amet consetur adipisicing elit. Laborsam a dolorem recusaae couuntur doribus posmus esse pariatur beatae."
		},
		{
			id: 6,
			icon: <AiOutlineGlobal size={32} />,
			title: "We do our initial research",
			description: "Lorem ipsum dolor, sit amet consetur adipisicing elit. Laborsam a dolorem recusaae couuntur doribus posmus esse pariatur beatae."
		}
	];

	return (
		<div className="container mx-auto py-24">
			<div className="text-center">
				<h1 className="text-7xl uppercase font-bold bg-gradient-to-r from-gray-100 via-gray-300 to-gray-600 bg-clip-text text-transparent mb-24">how we work</h1>
			</div>
			<motion.div
			ref={ref}
			initial={{ opacity: 0, y: 100 }}
			animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
			transition={{ duration: 0.5 }}
			 className="grid md:grid-cols-2 lg:grid-cols-3 gap-20">
				{steps.map((step) => (
					<div key={step.id} className="relative flex items-start">
						<div className="flex items-center justify-center rounded-full absolute text-7xl font-semibold text-stroke left-1/2 -top-24 w-36 h-36 border-2 border-dashed border-cyan-400 opacity-15 transform -translate-x-1/2 z-0">
							<span className="">{step.id < 10 ? `0${step.id}` : step.id}</span>
						</div>
						<div className="text-cyan-400 mr-4">
							{step.icon}
						</div>
						<div className="">
							<h3 className="text-xl 2xl:text-2xl font-semibold mb-2">{step.title}</h3>
							<p className="text-gray-300 text-justify">{step.description}</p>
						</div>
					</div>
				))}
			</motion.div>
		</div>
	)
}

export default WorkProcess