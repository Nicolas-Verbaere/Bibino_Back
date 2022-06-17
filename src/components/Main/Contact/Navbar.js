import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className='nav'>
            <Link to='/'></Link>
            <ul>
                <CustomLink to='/contact/PbTechnique'>
                    Problémes Techiques
                </CustomLink>
                <CustomLink to='/contact/SuggestionBiere'>
                    Suggestion Bières
                </CustomLink>
                <CustomLink to='/contact/SuggestionBHistoire'>
                    Suggestion Bière'Histoires
                </CustomLink>
            </ul>
        </nav>
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
