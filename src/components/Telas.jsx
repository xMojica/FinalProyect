import Header from "./Header";
import Tela from "./Tela";


const Telas = (props) => {
    return (
        <>
            <header>
                <Header />
            </header>
            <main id="main">
                <Tela telaData={props.telasData.telas} />
            </main>
        </>

    )
}

export default Telas;