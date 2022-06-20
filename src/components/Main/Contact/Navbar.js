import React from 'react';
import { Link, Outlet, useMatch, useResolvedPath } from 'react-router-dom';

import './Contact.scss';

export default function Navbar() {
    return (
        <>
            <nav className='nav'>
                <ul>
                    <CustomLink className='nav_link' to='/contact/PbTechnique'>
                        Problémes Techiques
                    </CustomLink>
                    <CustomLink
                        className='nav_link'
                        to='/contact/SuggestionBiere'>
                        Suggestion Bières
                    </CustomLink>
                    <CustomLink
                        className='nav_link'
                        to='/contact/SuggestionBHistoire'>
                        Suggestion Bière'Histoires
                    </CustomLink>
                </ul>
            </nav>
            <Outlet />
        </>
    );
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
        <li className={isActive ? 'active' : ''}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    );
}
