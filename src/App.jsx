import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
