import {projectLinks} from "../Constant/index.jsx";
import {useEffect, useRef, useState} from "react";
import {motion} from "motion/react";

export const Projects = () => {
	const parentRef = useRef(null)
	const [screenWidth, setScreenWidth] = useState(0)
	const [screenHeight, setScreenHeight] = useState(0)
	const [projects, setProjects] = useState(projectLinks); // Store in state
	const [startX, setStartX] = useState(0);

	const nextProject = () => {
		setProjects((prevProjects) => [...prevProjects.slice(1), prevProjects[0]]);
	};
	const prevProject = () => {
		setProjects((prevProjects) => [...prevProjects.slice(-1), ...prevProjects.slice(0, -1)]);
	};

	// const nextProject = () => {
	// 	setCurrentProject((currentProject + 1) % projectLinks.length)
	// }
	// const prevProject = () => {
	// 	setCurrentProject((currentProject + projectLinks.length - 1) % projectLinks.length)
	//
	// }

	// touch screen events
	const handleTouchStart = (e) => {
		setStartX(e.touches[0].clientX);
	};

	const handleTouchEnd = (e) => {
		const endX = e.changedTouches[0].clientX;
		const difference = startX - endX;

		if (difference > 50) {
			nextProject(); // Swipe left → Next project
		} else if (difference < -50) {
			prevProject(); // Swipe right → Previous project
		}
	};

	useEffect(() => {
		setScreenWidth(parentRef.current.offsetWidth)
		setScreenHeight(parentRef.current.offsetHeight)
	}, [parentRef])
	//----------------- hover effect in links ----------------------
	const HoverEffect = ({href, text}) => {
		const [isHovered, setHovered] = useState(false);
		return (
			<motion.div className="flex flex-col absolute bottom-2 right-1"
			            onMouseEnter={() => (
				            setHovered(true)
			            )}
			            onMouseLeave={() => (setHovered(false))}>
				<div className="w-fit flex items-center">
					<motion.a href={href} className="relative flex items-center text-sm"
					          target="_blank"
					          animate={{
						          color: isHovered ? "#1447e6" : "#162456",
					          }}
					          transition={{duration: 0.4, ease: "easeInOut"}}
					>{text}
						<motion.div className="absolute rounded-full bottom-0 left-0 h-[3px] bg-[#e17100]"
						            initial={{width: 0}}
						            animate={{width: isHovered ? "100%" : 0}}
						            transition={{duration: 0.4, ease: "easeInOut"}}
						/>
					</motion.a>
					<motion.svg
						xmlns="http://www.w3.org/2000/svg"
						width="14"
						height="14"
						viewBox="0 0 24 24"
						strokeWidth={isHovered ? '3' : '2'}
						fill='none'
						stroke="#e17100"
						className="transition-colors duration-400 ease-in-out"
					>
						<path d="M7 17L17 7M7 7H17V17"/>
					</motion.svg>
				</div>
			</motion.div>
		)
	}

	return (
		<div id="projects" className={`w-full h-screen flex flex-col ${screenHeight <= 670 ? "justify-start" : "justify-center"}  items-center overflow-hidden z-20`}>
			<div
				ref={parentRef}
				className={`relative w-7/8 flex ${screenHeight <= 670 ? "mt-20" : "mt-0"} items-center h-3/5`}
				onTouchStart={handleTouchStart}
				onTouchEnd={handleTouchEnd}
			>

				{projects.map((value, i) => {
					return (
						<motion.div key={i} className={`absolute flex flex-col
						xl:w-[240px] w-[200px] shadow-xl shadow-gray-500 py-5 px-2 rounded-2xl h-[390px] overflow-hidden`}
						            style={{
							            background: "radial-gradient(circle, #ffee8c 50%, #ff9b00 100%)",
							            left: `${i * (screenWidth / projects.length - (screenWidth < 600 ? 26 : 18))}px`,
							            zIndex: i < projects.length / 2 ? 10 + i : 10 - i,
							            transform: `scale(${i <= Math.ceil((projects.length / 2) - 1) ? 1 + 0.1 * i : 1 + 0.1 * Math.abs(i - (projects.length - 1))})`
						            }}
						            whileHover={{scale: 1.3}}
						            transition={{duration: 0.4, ease: "easeInOut"}}
						>
							<p className="font-bold text-center uppercase">{value.title}</p>
							<img src={value.logo} alt="logo"
							     className=" w-full h-[70%] object-cover rounded-2xl shadow shadow-gray-500"/>
							<p className="py-4 text-xs">{value.description}</p>
							<HoverEffect href={value.href} text={'Check it out'}/>
						</motion.div>
					)
				})}
			</div>
			<div className="md:flex hidden w-full mb-10 px-10 items-end justify-between z-20">
				<button className="hover:text-indigo-600 transition-colors"
				        onClick={prevProject}>
					⬅ Previous
				</button>
				<button className="hover:text-indigo-600 transition-colors"
				        onClick={nextProject}>
					Next ➡
				</button>
			</div>
		</div>
	)
}
