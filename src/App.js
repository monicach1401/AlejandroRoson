import { Home } from "./components/Home.js";
import { Navigation } from "./components/Navigation.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Services} from "./components/Services.js"
import { Aboutme } from "./components/Aboutme.js";
import { Contact } from "./components/Contact.js";
import "./App.css";


function App() {
  return (
    <>

        <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/aboutme" element={<Aboutme />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

