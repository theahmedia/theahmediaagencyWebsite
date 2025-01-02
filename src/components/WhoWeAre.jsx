import { FaUserPlus, FaAward, FaUsers, FaThumbsUp } from "react-icons/fa";
import { motion } from "framer-motion";

const WhoWeAre = () => {
	return (
		<section className="relative text-white py-16">
			{/* Background Gradient */}
			<div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-cyan-900/50 to-black">
				{/* Plasmodium Effects */}
				<div className="absolute top-10 left-0 w-72 h-72 bg-cyan-400 blur-3xl opacity-20 rounded-full"></div>
				<div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-500 blur-3xl opacity-30 rounded-full"></div>
				<div className="absolute top-1/2 left-1/3 w-80 h-80 bg-cyan-600 blur-2xl opacity-25 rounded-full"></div>
			</div>

			{/* Grid Layout */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
				{/* Left Section */}
				<div className="space-y-6">
					<h5 className="uppercase text-cyan-400 text-sm font-semibold">Who we are</h5>
					<h2 className="text-5xl font-bold leading-tight">Experts in <span className="text-cyan-400">digital</span> brand innovation</h2>
					<p className="text-gray-400">We specialize in transforming brands through cutting-edge digital strategies, blending creativity with technology to drive growth, enhance engagement,and deliver memorable experiences.</p>

					{/*Reviews */}
					<div className="">

						{/* Reviews */}
						<div>
							<div className="flex items-center gap-1">
								<span className="text-yellow-500 text-xl">★★★★★</span>
								<span className="text-sm text-gray-400">(40+ Reviews)</span>
							</div>
							<div className="flex items-center mt-2">
								{/* Reviewer Avatars */}
								<img
									src="https://via.placeholder.com/32"
									alt="User"
									className="w-8 h-8 rounded-full border-2 border-white"
								/>
								<img
								src="https://via.placeholder.com/32"
								alt="User"
								className="w-8 h-8 rounded-full border-2 border-white -ml-3"
								/>
								<img
								src="https://via.placeholder.com/32"
								alt="User"
								className="w-8 h-8 rounded-full border-2 border-white -ml-3"
								/>
								<img
								src="https://via.placeholder.com/32"
								alt="User"
								className="w-8 h-8 rounded-full border-2 border-white -ml-3"
								/>
							</div>
							<button className="text-cyan-400 mt-4 flex items-center gap-2 text-sm font-semibold">
								Contact Now <span>→</span>
							</button>
						</div>
					</div>
				</div>

				{/* Right Section - Statistics */}
				<div className="relative grid grid-cols-2 gap-6">
					{[
						{
						icon: <FaUserPlus className="text-cyan-400 text-3xl" />,
						value: "35k+",
						label: "Happy Customers Around the World",
						},
						{
						icon: <FaAward className="text-cyan-400 text-3xl" />,
						value: "120+",
						label: "Best Client Support Awards Achieved",
						},
						{
						icon: <FaUsers className="text-cyan-400 text-3xl" />,
						value: "250+",
						label: "Trusted Best Partners and Sponsors",
						},
						{
						icon: <FaThumbsUp className="text-cyan-400 text-3xl" />,
						value: "5k+",
						label: "Active Users Using Our Best Services",
						},
					].map((stat, index) => (
						<div
						key={index}
						className="backdrop-blur-lg bg-black/20 shadow-2xl px-6 py-10 rounded-lg text-center space-y-4 z-10"
						>
						<div className="flex items-center justify-center">{stat.icon}</div>
						<h3 className="text-3xl font-bold">{stat.value}</h3>
						<p className="text-sm text-gray-400">{stat.label}</p>
						</div>
					))}
					<motion.div
						className="absolute bottom-0 right-0 w-60 h-60 bg-cyan-400 rounded-full blur-3xl z-0"
						animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
						transition={{
						repeat: Infinity,
						duration: 4,
						}}
					></motion.div>
					<motion.div
						className="absolute top-0 left-0 w-60 h-60 bg-cyan-400 rounded-full blur-3xl z-0"
						animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
						transition={{
						repeat: Infinity,
						duration: 4,
						}}
					></motion.div>
				</div>
			</div>
			
		</section>
	);
};

export default WhoWeAre;
