import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Vans from "./components/vans/Vans";
import VanDetails from "./components/vanDetails/VanDetails";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/vans" element={<Vans/>}/>
        <Route path="/vans/:id/:name" element={<VanDetails/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
