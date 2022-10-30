import './Navbar.css';

function Navbar() {
    return (
        <nav className='headbar'>
            <ul>
                <li><a href="home.html"><span>1.</span>About</a></li>
                <li><a href="blog.html"><span>2.</span>Projects</a></li>
                <li><a href="news.html"><span>3.</span>Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;