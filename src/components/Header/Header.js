import HeaderNav from "./HeaderNav/HeaderNav";
import HeaderTop from "./HeaderTop/HeaderTop";
import './Header.scss';

function Header() {
    return (
    <header className="header">
        <HeaderTop />
        <HeaderNav />
      </header>
    );
}

export default Header;