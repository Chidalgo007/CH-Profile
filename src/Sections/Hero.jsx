export const Hero = () => {
	return (
		<div id="hero" className="w-full h-screen flex flex-col sm:justify-center justify-between items-center py-20 sm:py-0">
			<div className="w-9/11 sm:h-4/7 h-[75%] flex sm:flex-row flex-col justify-between items-center">
				<div className="sm:w-[50%] xl:w-3/5 w-full">
					<h1 className="text-center text-[40px] font-semibold">Hi I&#39;m Chris</h1>
					<p className="text-center">Building innovative mobile and web
						applications with sleek, modern designs, leveraging cutting-edge technologies. Focused on
						intuitive user experiences, performance optimization, and seamless integrations.</p>
				</div>

				{/*----------- image ----------------------*/}
				<div className="w-[200px] sm:w-[300px] xl:w-fit">
					<img src="/img/avatars/hero.png" alt="hero"/>
				</div>
			</div>

			{/*----------------- button -----------------*/}
			<button className="w-fit px-4 btn z-10">
				<a href="#contact" className="">Contact me</a>
			</button>
		</div>
	)
}