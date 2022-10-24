import { Link } from "react-router-dom";

const Tela = (props) => {

    return (
      <>
        {props.telaData.map((tela) => {
          return (
            <>
            <div 
              key={`${tela.name}`} 
              className="tela">
              <Link to="/descripcion"><img
                src={tela.image}
                alt={tela.name}
              /></Link>
              <div className="tela-info">
                <h3>{tela.name}</h3>
              </div>
              <div className="overview">
                <h3>{tela.price}</h3>
              </div>
            </div>
            </>
              
          );
        })}
      </>
    );
  };
  export default Tela;
  