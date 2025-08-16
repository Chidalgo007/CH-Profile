import {navLinks, socialLinks} from "../Constant/index.jsx";
import {useState} from "react";
//eslint-disable-next-line no-unused-vars
import {motion} from "motion/react"

const mobile = window.matchMedia("(max-width: 768px)");

export const Nav = () => {
	const [menuClicked, setMenuClicked] = useState(false);
	const handleClick = ()=>{
		setMenuClicked(prev=>!prev )
	}

	return (
		<div className="fixed flex items-center justify-end w-full z-40 px-10">

			{/*------------------ menu button ----------------------*/}
			<div className="flex flex-col absolute top-5 right-10 gap-1 z-20" onClick={() => {handleClick()}}>
				<motion.div className="w-6 h-1 rounded bg-blue-950"
				            animate={{
					            rotate: menuClicked ? 45 : 0,
					            y: menuClicked ? 8 : 0
				            }}/>
				<motion.div className="w-6 h-1 rounded bg-blue-950"
				            animate={{
					            opacity: menuClicked ? 0 : 1
				            }}/>
				<motion.div className="w-6 h-1 rounded bg-blue-950"
				            animate={{
					            rotate: menuClicked ? -45 : 0,
					            y: menuClicked ? -8 : 0
				            }}/>
			</div>

			{/* ------------------ menu links ----------------------*/}
			<motion.div
				initial={{x: "100%"}}
				animate={{
				x: menuClicked ? 0 : "100%",
				transition: {duration: 0.5, ease: "easeInOut"},
			}}
			            className={`flex flex-col items-center justify-around absolute shadow-2xl rounded-tl-4xl rounded-bl-4xl rounded-br-4xl top-0 right-0 w-full sm:w-1/2 md:w-2/6 lg:w-2/8 h-screen bg-white z-10`}>
				<div className={`flex flex-col gap-10 w-3/4 h-1/2 justify-center`}>
					{navLinks.map((value, index) => (
							<a
								href={value.href}
								key={index}
								onClick={() => {handleClick()}}
								className="font-bold text-xl">
								{value.title}
							</a>
						)
					)
					}
				</div>

				{/*---------------- social media links ----------------*/}
				<div className="w-full flex flex-col justify-center items-center">
					<span className="w-3/5 border border-blue-950 mt-5"/>
					<div className="flex mt-7 mb-3">
						{socialLinks.map((value, index) => (
							// <div className="w-20 h-15 ml-4 border border-red-500">
							<a href={value.href} key={index} target="_blank"
							   className="flex items-center justify-center w-15 h-10 ml-4">
								<img src={value.icon} alt={value.title}
								     className="object-contain w-full h-full"/>
							</a>
							// </div>
						))}
					</div>
				</div>
			</motion.div>

		</div>
	)
}