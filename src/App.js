import Login from "./components/Login";
import Telas from "./components/Telas";
import OlvideContraseña from "./components/OlvideContraseña"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import data from "./mocks/data";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={< Login/>}></Route>
          <Route exact path="/telas" element={< Telas telasData = {data}/>}></Route>
          <Route exact path="/olvideContraseña" element={< OlvideContraseña/>}></Route>
          <Route exact path="/main" element={< Telas/>}></Route>
        </Routes>

      </BrowserRouter>
    </>

  );
}

export default App;
