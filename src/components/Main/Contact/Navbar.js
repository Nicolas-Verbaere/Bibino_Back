import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav>
                <Link to='/contact/PbTechnique'>Problémes Techiques</Link>
                <Link to='/contact/SuggestionBiere'>Suggestion Bières</Link>
                <Link to='/contact/SuggestionBHistoire'>
                    Suggestion Bière'Histoires
                </Link>
            </nav>
            <Outlet />
        </div>
    );
};
export default React.memo(Navbar);
