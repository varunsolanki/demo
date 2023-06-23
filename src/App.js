import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/home.js";
import About_Us from "./Pages/about.js";
import Permanent_Residency from "./Pages/permanent_residency.js";
import Express_Entry from "./Pages/express_entry.js";
import Provincial_Nominee_Program from "./Pages/provincial_nominee_program.js";
import Family_Sponsorship from "./Pages/family_sponsorship.js";
import Atlantic_Immigration_Program from "./Pages/atlantic_immigration_program.js";
import Care_Giver from "./Pages/care_giver.js";
import Work from "./Pages/work.js";
import Invest from "./Pages/invest.js";
import ICT from "./Pages/ict.js";
import Entrepreneur from "./Pages/entrepreneur.js";
import Visit from "./Pages/visit.js";
import Study_permit_overview from "./Pages/study_permit_overview.js";
import Startup_Visa from "./Pages/startup_visa.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/aboutus" element={<About_Us/>}/>
        <Route path="/permanent_residency" element={<Permanent_Residency/>}/>
        <Route path="/express_entry" element={<Express_Entry/>}/>
        <Route path="/provincial_nominee_program" element={<Provincial_Nominee_Program/>}/>
        <Route path="/family_sponsorship" element={<Family_Sponsorship/>}/>
        <Route path="/atlantic_immigration_program" element={<Atlantic_Immigration_Program/>}/>
        <Route path="/care_giver" element={<Care_Giver/>}/>
        <Route path="/visit" element={<Visit/>}/>
        <Route path="/study_permit_overview" element={<Study_permit_overview/>}/> 
        <Route path="/work" element={<Work/>}/>
        <Route path="/invest" element={<Invest/>}/>
        <Route path="/ict" element={<ICT/>}/>
        <Route path="/entreprenur" element={<Entrepreneur/>}/>
        <Route path="/startup_visa" element={<Startup_Visa/>}/>
      </Routes>
    </div>
  );
}

export default App;
