
import wave from "../img/wave.png";
import avatar from "../img/avatar.svg";
import { Link } from "react-router-dom"

function Registrarse() {

  return (
    <>
      <img className="wave" src={wave} alt="wave" />
      <div className="container">
        <div className="img">
        </div>
        <div className="login-content">
          <form action="index.html">
            <img src={avatar} alt="avatar" />
            <h2 className="title">Registro</h2>
            <div className="input-div one">
              <div className="i">
                <i className="fas fa-user" />
              </div>
              <div className="div">
                <input type="text" placeholder="Usuario" className="input" />
              </div>
            </div>
            <div className="input-div one">
              <div className="i">
                <i className="fas fa-user" />
              </div>
              <div className="div">
                <input type="text" placeholder="Contraseña" className="input" />
              </div>
            </div>
            <div className="input-div pass">
              <div className="i">
                <i className="fas fa-lock" />
              </div>
              <div className="div">
                <input type="text" placeholder="Correo" className="input" />
              </div>
            </div>
            <div className="botones">
            <Link to="/"><input type="button" className="btn" defaultValue="Registrar" /></Link>
            </div>
            
          </form>
        </div>
      </div>
    </>

  )
}

export default Registrarse;
