import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav className='headbar'>
            <ul>
                <Link to="/">Home</Link>
                <Link to="#about">About</Link>
                <Link to="#projects">Project</Link>
                <Link to="#contact">Contact</Link>
            </ul>
        </nav>
    );
}

export default Navbar;