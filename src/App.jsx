import { Routes, Route } from "react-router-dom";
import PrimaryMenu from "./Components/PrimaryMenu";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './Components/Pages/Home';
import Contact from "./Components/Pages/Contact";
import About from "./Components/Pages/About";
import GetQuote from "./Components/Pages/GetQuote";

function App() {
  return (
    <>
    <div className="App">
      <div className="App-header">
      <PrimaryMenu/>
       <Routes>
         <Route exact path="/" element={<Home/>}/>
         <Route exact path="/contact" element={<Contact/>}/>
         <Route exact path="/about" element={<About/>}/>
         <Route exact path="/getquote" element={<GetQuote/>}/>
       </Routes>
    </div>
    </div>
    </>
  );
}

export default App;
