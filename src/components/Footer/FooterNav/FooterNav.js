import './FooterNav.scss';

function Footer() {
    return (
        <nav className="footer_container">
          <a className="footer_container-link" href="/contact">Contact</a>
          <a className="footer_container-link" href="/a-propos">A propos</a>
        </nav>
    );
}

export default Footer;