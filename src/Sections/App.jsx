import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Background } from "../Components/Background.jsx";
import {Hero} from "./Hero.jsx";
import {Nav} from "../Components/Nav.jsx";
import {Contact} from "./Contact.jsx";
import {Skills} from "./Skills.jsx";
import {Projects} from "./Pojects.jsx";
import ChatBot from "../Components/ChatBot.jsx";
import  ExcelAuto  from "../ProjectPage/ExcelAuto.jsx";
import ElectronHumby from "../ProjectPage/ElectronHumby.jsx";

function App() {

	  return (
    <Router>
      <ChatBot />
      <Nav />
      <Routes>
        {/* Define your routes */}
        <Route path="/" element={
					<>
					<Background />
            <Hero />
            <Skills />
            <Projects />
            <Contact />
          </>
        } />
          <Route path="/excel-Auto" element={<ExcelAuto />} />
          <Route path="/humby-Auto" element={<ElectronHumby />} />
          {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App
