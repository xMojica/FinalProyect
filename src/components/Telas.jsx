import Header from "./Header";
import Tela from "./Tela";


const Telas = (props) => {
    return (
        <>
            <Header />
            <main id="main">
                <Tela telaData={props.telasData.telas} />
            </main>
        </>

    )
}

export default Telas;