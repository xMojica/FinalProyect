import Login from "./components/Login";
import Telas from "./components/Telas";
import OlvideContraseña from "./components/OlvideContraseña"
import Descripcion from "./components/Descripcion"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import data from "./mocks/data";
import "./Css/login.css"
import "./Css/header.css"
import "./Css/main.css"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={< Login/>}></Route>
          <Route exact path="/telas" element={< Telas telasData = {data}/>}></Route>
          <Route exact path="/olvideContraseña" element={< OlvideContraseña/>}></Route>
          <Route exact path="/descripcion" element={< Descripcion/>}></Route>
        </Routes>

      </BrowserRouter>
    </>

  );
}

export default App;
