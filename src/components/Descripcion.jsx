import tela from '../img/telas/1.jpg'
import Header from './Header'
import { Link } from 'react-router-dom'
import Footer from './Footer'

function Descripcion(props) {

  return (
    <>
      <Header />

      <main id="main-descripcion">
        <div id='imagen'>
          <img src={tela} alt="imagen" />
        </div>
        <div id='descripcion'>
          <h1>{tela.name}</h1>
          <h3>{tela.price}</h3>
          <div className="input-div one">
            <div className="i">
              <i className="fas fa-user" />
            </div>
            <div className="div">
              <input type="number" placeholder="Cantidad" className="input" id='cantidad' />
            </div>
          </div >
          <Link to="/"><input type="button" className="btn" defaultValue="Comprar"/></Link>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Descripcion