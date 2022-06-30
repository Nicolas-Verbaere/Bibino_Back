import './Footer.scss';
import FooterNav from './FooterNav/FooterNav';

function Footer({ user }) {
    return (
        <footer className='footer'>
            <p className='footer-copyright'>
                Copyright © 2022 Bibino - Tous droits réservés
            </p>
            <FooterNav user={user} />
        </footer>
    );
}

export default Footer;
