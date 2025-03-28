import {useEffect, useRef, useState} from "react";
import * as emailjs from "@emailjs/browser";
import {Check, XCircle} from "lucide-react";

export const Contact = () => {
	const nameRef = useRef()
	const emailRef = useRef()
	const messageRef = useRef()
	const [success, setSuccess] = useState(false)
	const [clicked, setClicked] = useState(false)


	//---------------- notification ticket ---------------------------------
	const Notification = ({success, clicked}) => {
		return (
			<p className={`py-3 w-full transition-opacity duration-300 flex ${clicked ? "opacity-100" : "opacity-0"} ${success ? "text-green-600" : "text-red-500"}`}>
				{success ? (<><Check size={24} color="green"/> &nbsp;Your email was send successfully</>) :
					(<><XCircle size={24} color={"red"}/> &nbsp;Something when wrong try again</>)}
			</p>
		)
	};

	// ----------------- remove notification -----------------------------
	const timer = () => {
		setTimeout(() => {
			setSuccess(false)
			setClicked(false)
		}, 5000)
	}

	useEffect(() => {
		timer()
	}, [success, clicked])

	//----------------- send the form info ---------------------------------
	const handleClick = async (e) => {
		e.preventDefault()
		try {
			await emailjs.send(
				'service_1u951yh',
				'template_6ifr54s',
				{
					from_name: nameRef.current.value,
					to_name: 'Chris',
					from_email: emailRef.current.value,
					message: messageRef.current.value,
				}, 'lLKG92GH5VCPbLGSV')
			setSuccess(true)
			setClicked(true)
			nameRef.current.value = ''
			emailRef.current.value = ''
			messageRef.current.value = ''


		} catch (error) {
			console.log('EmailJS Error', error)
			setSuccess(false)
			setClicked(false)
		}
	}

	//------------------ form -------------------------------
	return (
		<div id="contact" className="relative flex justify-center items-start flex-col xl:pl-40 px-10 mb-20">
			<div className="flex flex-col justify-center items-center md:w-2/5 w-full h-5/6">
				<h1 className="text-4xl font-bold">Contact me</h1>
				<p>I am available for remote and freelance work!</p>
				<Notification success={success} clicked={clicked}/>
				<div className="rounded-2xl w-4/5 2xl:w-3/5 px-7 py-5 shadow-2xl border md:border-gray-300 border-blue-950">
					<form className="flex flex-col">
						<label htmlFor="name" className="label">Name</label>
						<input ref={nameRef} id="name" type="text" className="input" placeholder="Anna Muller"
						       required/>
						<label htmlFor="email" className="label">Email</label>
						<input ref={emailRef} id="email" type="email" className="input"
						       placeholder="anna.muller@gmail.com" required/>
						<label htmlFor="message" className="label">Message</label>
						<textarea ref={messageRef} id="message" className="input" rows={4}
						          placeholder="Hi, I want to work with you ..."
						          required/>
						<button className="flex justify-center items-center mt-10 w-full btn"
						        onClick={handleClick}>
							Sent
							<img src="/img/email1.svg" alt="email" className="ml-2 w-5 h-5"/>
						</button>
					</form>
				</div>
			</div>
			<div className="md:block hidden">
				<img src="img/avatars/email.png" alt="mail avatar" className="absolute top-10 md:right-0 right-40 2xl:right-80"/>
			</div>
		</div>
	)
}
