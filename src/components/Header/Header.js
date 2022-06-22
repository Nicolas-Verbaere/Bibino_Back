import HeaderNav from "./HeaderNav/HeaderNav";
import HeaderTop from "./HeaderTop/HeaderTop";
import './Header.scss';

function Header({isLogged, setIsLogged}) {
    return (
    <header className="header">
        <HeaderTop isLogged={isLogged} setIsLogged={setIsLogged} />
        <HeaderNav />
      </header>
    );
}

export default Header;