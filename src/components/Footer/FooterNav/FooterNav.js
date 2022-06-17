import { Link } from 'react-router-dom';

import './FooterNav.scss';

function Footer() {
    return (
        <nav className='footer_container'>
            <a className='footer_container-link' href='/contact'>
                Contact
            </a>
            <Link to='/a-propos'>
                <p className='footer_container-link' href='/a-propos'>
                    A propos
                </p>
            </Link>
        </nav>
    );
}

export default Footer;
