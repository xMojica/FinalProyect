import '../Css/index.css';
import wave from "../img/wave.png";
import avatar from "../img/avatar.svg";
import { Link } from "react-router-dom"

function Login() {

  return (
    <>
      <img className="wave" src={wave} alt="wave" />
      <div className="container">
        <div className="img">
        </div>
        <div className="login-content">
          <form action="index.html">
            <img src={avatar} alt="avatar" />
            <h2 className="title">Bienvenido</h2>
            <div className="input-div one">
              <div className="i">
                <i className="fas fa-user" />
              </div>
              <div className="div">
                <input type="text" placeholder="Usuario" className="input" />
              </div>
            </div>
            <div className="input-div pass">
              <div className="i">
                <i className="fas fa-lock" />
              </div>
              <div className="div">
                <input type="password" placeholder="Contraseña" className="input" />
              </div>
            </div>
            <Link to="/olvideContraseña">Olvide mi contraseña</Link>
            <Link to="/telas"><input type="button" className="btn" defaultValue="Ingresar" /></Link>
          </form>
        </div>
      </div>
    </>

  )
}

export default Login
