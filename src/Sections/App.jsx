import {Background} from "../Components/Background.jsx";
import {Hero} from "./Hero.jsx";
import {Nav} from "../Components/Nav.jsx";
import {Contact} from "./Contact.jsx";
import {Skills} from "./Skills.jsx";
import {Projects} from "./Pojects.jsx";

function App() {

	return (
		<>
			<Background/>
			<Nav/>
			<Hero/>
			<Skills/>
			<Projects />
			<Contact/>
		</>
	)
}

export default App
