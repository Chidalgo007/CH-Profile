import {motion, useInView} from "motion/react"
import {useEffect, useRef} from "react";
import {languages, skills} from "../Constant/index.jsx";

export const Skills = () => {
	const screenHieght = window.innerHeight
	const screenWidth = window.innerWidth
	console.log(screenHieght)
	const ref = useRef()
	const isInView = useInView(ref, {margin: "0px 0px -300px 0px"})

	useEffect(() => {
		console.log("Element is in view: ", isInView)
	}, [isInView])

	return (
		<div id="about" className="w-full flex justify-center h-screen">
			<div className="relative w-1/2 h-[89%] px-10 hidden md:flex justify-end flex-col">

				{/*----------------- image ----------------------*/}

				<img src="/img/avatars/skills.png" alt="skills avatar" className={`absolute ${screenWidth<947?"bottom-[58%] h-[300px]":"bottom-[38%]"} z-30`}/>

				{/*---------------- about me ----------------------*/}
				<div
					className={`${screenWidth<947?"h-1/2":"h-1/3"} w-full border-t-2 border-r-1 rounded-tr-[60px] border-blue-950 z-20 md:mb-30`}>
					<motion.p
						className="p-10 px-2 text-center leading-7"
						initial={{opacity: 0}}
						animate={{opacity: isInView ? 1 : 0, transition: {duration: 1.8, ease: "easeInOut"}}}
					>
						I'm a software developer passionate about turning ideas into real, functional applications.
						I specialize in building meaningful solutions, from intuitive mobile apps to robust desktop software with polished interfaces.
						Currently, I’m exploring cross-platform development and interactive user experiences using modern frameworks and tools.
						I thrive in collaborative environments where innovation and creativity drive results, and I enjoy tackling complex problems to deliver engaging, high-quality applications.
						Outside of coding, you’ll find me at the gym or unwinding with a good movie. Let’s create something impactful together!
					</motion.p>
				</div>
			</div>

			{/*----------------- mobile skills container ------------------*/}
			{/*--------------- blue container ------------*/}
			<div ref={ref}
			     className="relative flex flex-col justify-center items-center md:w-1/2 w-full h-[89.5vh] overflow-hidden">
				<motion.div
					className={`shadow-2xl rounded-4xl w-[83%] ${screenHieght <= 600 ? "h-[200px]" : "2xl:h-[300px] md:h-[220px] sm:h-[150px] h-[100px]"} absolute sm:right-11 md:bottom-[-190px] sm:bottom-[-100px] bottom-[-50px] transform sm:rotate-[-10deg] z-10`}
					style={{background: "linear-gradient(300deg, #193cb8 0%, #8ec5ff 100%)"}}
					initial={{y: 100}}
					animate={
						isInView ? {
							y: isInView ? -50 : 100,
							transition: {duration: 0.8, ease: "easeInOut"}
						} : {}
					}
				>

				</motion.div>

				{/*------------------- yellow container ---------------------------*/}
				<motion.div className="w-[80%] sm:w-4/6 h-6/7 rounded-4xl shadow-2xl absolute border border-gray-200"
				            style={{background: "radial-gradient(circle, #ffbb55 50%, #ff9b00 100%)"}}

				            initial={{y: 1000}}
				            animate={{
					            y: isInView ? 0 : 1000,
					            transition: {duration: 1.8, ease: "easeInOut"}
				            }
				            }
				>
					{/*---------------- skills -------------------*/}
					<div>
						{skills.map((value, i) => {
							return (
								<div key={i} className="flex flex-col px-6">
									<h1 className={`font-semibold ${screenHieght <= 600 ? "pt-3" : "lg:text-xl 2xl:text-2xl 2xl:py-3 pt-3"} `}>{value.title}</h1>
									<div className="flex w-full gap-3">
										{value.icons.map((icon, i) => {
											return (
												<span key={i} className=" 2xl:w-10 sm:w-8 w-6">
													<img src={icon} alt="icon" className="w-full object-contain"/>
												</span>
											)
										})}
									</div>
									<div className="flex items-center mt-2">
										<div
											className="mt-2 mb-2 flex items-center transform skew-x-[-15deg] border-1 border-blue-950 h-5 w-[95%]">
											<motion.div
												className={`ml-0.5 h-[70%] bg-blue-950`}
												initial={{width: 0}}
												animate={{
													width: isInView ? `${value.level}%` : 0,
													transition: {duration: 2.8, ease: "easeInOut"}
												}}
											/>
										</div>
										<p className="text-sm font-semibold ml-2">{value.level}%</p>
									</div>
								</div>
							)
						})}
					</div>

					{/*-------------- languages -----------------------*/}
					<div className="px-6">
						<h1 className={`font-semibold ${screenHieght <= 600 ? "" : "lg:text-xl 2xl:text-2xl 2xl:py-3 py-1"}`}>Languages</h1>
						{languages.map((value, i) => {
							return (
								<div key={i} className="flex items-center">
									<div className="flex items-center font-semibold mr-3">
										<img src={value.icon} alt='flag' className="h-5 w-5 mr-1"/>
										<p>{value.title}</p>
									</div>
									<div
										className="mt-2 mb-2 flex items-center transform skew-x-[-15deg] border-1 border-blue-950 2xl:h-5 h-3 w-[25%]">
										<motion.div className="mx-0.5 h-[70%] bg-blue-950"
										            initial={{width: 0}}
										            animate={{
											            width: isInView ? `${value.level}%` : 0,
											            transition: {duration: 2.8, ease: "easeInOut"}
										            }}
										/>
									</div>
									<p className="ml-2 text-sm font-semibold">{value.level}%</p>
								</div>
							)
						})}
					</div>
				</motion.div>
			</div>
		</div>
	)
}