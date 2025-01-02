import PropTypes from "prop-types";

const Card = ({ title, description, bgColor }) => {
	return (
		<div className="w-[470px]">
			<div className="w-[470px]">
			<div className={`flex flex-col justify-between w-[450px] h-52 text-gray-900 px-10 py-6 rounded-3xl ${bgColor} flex-shrink-0`}>
				<div className="">
                    <h3 className="text-2xl mb-3">{title}</h3>
				    <p className="mb-2">{description}</p>
                </div>
				<div className="">
                    <button
                        className="relative p-2 px-5 text-sm text-white font-medium bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-500 
                            hover:from-cyan-400 hover:via-cyan-300 hover:to-cyan-400
                            rounded-full transition-all duration-300 ease-in-out
                            shadow-[0_0_20px_rgba(34,211,238,0.3)]
                            hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]
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
                            before:duration-700">
                        See Works
                    </button>
                </div>
			</div>
		</div>
		</div>
	);
};

Card.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	bgColor: PropTypes.string.isRequired,
};

const MarqueeOne = () => {
	const cards = [
		{
			title: "YouTube Videos",
			description: "Editing Viral YouTube videos that create an impact and get you likes",
			bgColor: "bg-slate-100",
		},
		{
			title: "YouTube Videos",
			description: "Editing Viral YouTube videos that create an impact and get you likes",
			bgColor: "bg-orange-100",
		},
		{
			title: "YouTube Videos",
			description: "Editing Viral YouTube videos that create an impact and get you likes",
			bgColor: "bg-yellow-100",
		},
		{
			title: "YouTube Videos",
			description: "Editing Viral YouTube videos that create an impact and get you likes",
			bgColor: "bg-lime-100",
		},
		{
			title: "YouTube Videos",
			description: "Editing Viral YouTube videos that create an impact and get you likes",
			bgColor: "bg-stone-100",
		},
	];

	return (
		<div className="overflow-hidden w-full relative mb-6">
			<div
				className="flex animate-marquee"
				style={{
					width: `calc(${cards.length} * 470px * 2)`, // Adjusted for seamless looping
				}}
			>
				{[...cards, ...cards].map((card, index) => (
					<Card
						key={index}
						title={card.title}
						description={card.description}
						bgColor={card.bgColor}
					/>
				))}
			</div>
		</div>
	);
};

export default MarqueeOne;
