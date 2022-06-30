import './HeaderNav.scss';

import { Link } from 'react-router-dom';

function HeaderNav() {
    return (
        <nav className='nav_header'>
            <Link to='/bieres'>
                <p className='nav_header-link' href='/bieres'>
                    Bières
                </p>
            </Link>
            <Link to='/top-bieres'>
                <p className='nav_header-link' href='/top-bieres'>
                    Bières du moment
                </p>
            </Link>
            <Link to='/biere-histoire'>
                <p className='nav_header-link' href='/biere-histoir'>
                    Bière Histoire
                </p>
            </Link>
        </nav>
    );
}

export default HeaderNav;
