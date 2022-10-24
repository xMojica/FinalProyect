const Tela = (props) => {

    return (
      <>
        {props.telaData.map((tela) => {
          return (
              <div 
              key={`${tela.name}`} 
              className="tela">
              <img
                src={tela.image}
                alt={tela.name}
              />
              <div className="tela-info">
                <h3>{tela.name}</h3>
              </div>
              <div className="overview">
                <h3>{tela.price}</h3>
              </div>
            </div>
          );
        })}
      </>
    );
  };
  export default Tela;
  