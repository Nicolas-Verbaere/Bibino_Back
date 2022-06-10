import './HeaderNav.scss';

function HeaderNav() {
    return (
        <nav className="nav_header">
          <a className="nav_header-link" href="#">Bières</a>
          <a className="nav_header-link" href="#">Bières du moment</a>
        </nav>
    );
}

export default HeaderNav;