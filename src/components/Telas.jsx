import Tela from "./Tela";


const Telas = (props) => {
    return (
        <main id="main">
            
            <Tela telaData={props.telasData.telas} />
        </main>
    )
}

export default Telas;