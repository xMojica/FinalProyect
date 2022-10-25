import Header from "./Header";
import Tela from "./Tela";
import Footer from "./Footer";


const Telas = (props) => {
    return (
        <>
            <Header />
            <main id="main">
                <Tela telaData={props.telasData.telas} />
            </main>
            <Footer />
        </>

    )
}

export default Telas;