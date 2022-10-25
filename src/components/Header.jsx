import Search  from "./Search";
import logo from "../img/Logo.png"
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <Link to={"/"}><img src={logo} width="250px" alt="Logo"></img></Link>
            <div>
        <Search />
            <Link to="/"><input type="button" className="search" defaultValue="Salir" width="100px"/></Link>
            </div>
            
        </header>
    )
}

export default Header;