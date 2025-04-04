export const Background = () => {

	return (


			<div
				className={`absolute top-0 left-0 right-0 z-0  h-[${visualViewport.height * 4}] w-full flex flex-col`}>

				<div
					className={`mr-5 border-b-3 border-r-3 border-blue-950 rounded-br-4xl w-[50%] h-[95vh] self-end`}/>
				<div
					className={`self-start ml-5 2xl:mt-[-3px] mt-[-2.5px] border-t-3 border-l-3 border-b-3 rounded-tl-4xl rounded-bl-4xl border-blue-950 w-[50%] h-[95vh]`}/>
				<div
					className={`mr-5 mt-[-2.5px] border-t-3 border-r-3 border-b-3  border-blue-950 rounded-tr-4xl rounded-br-4xl w-[50%] h-[95vh] self-end`}/>
				<div
					className={`self-start ml-5 2xl:mt-[-3px] mt-[-2.5px] border-t-3 border-l-3 rounded-tl-4xl border-blue-950 w-[50%] h-[95vh]`}/>

		</div>
	)
}