import { Link } from 'react-router-dom';

import './FooterNav.scss';

function Footer({ user }) {
    return (
        <nav className='footer_container'>
            <Link to={'/contact'} user={user}>
                <p className='footer_container-link' href='/contact'>
                    Contact
                </p>
            </Link>

            <Link to='/a-propos'>
                <p className='footer_container-link' href='/a-propos'>
                    A propos
                </p>
            </Link>
        </nav>
    );
}

export default Footer;
