import Search  from "./Search";
import logo from "../img/Logo.png"

const Header = () => {
    return (
        <header>
            <img src={logo} width="250px" alt="Logo"></img>
            <Search />
        </header>
    )
}

export default Header;