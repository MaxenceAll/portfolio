import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./screens/About";
import Home from "./screens/Home";
import Download from "./screens/Download"

import CVscreen from "./components/CV/CVscreen";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home />  } />
          <Route path="/about" element={  <About /> } />
          <Route path="/download" element={ <Download />  } />
          <Route path="/cv" element={ <CVscreen/> }/>


          {/* Si aucune route connue : */}
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
