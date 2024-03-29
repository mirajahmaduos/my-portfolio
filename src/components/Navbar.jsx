import {Link} from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar (){
    return (
        <div className="navbar">
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/experience">Experience</Link>
                <Link to="/skills">Skills</Link>
                <Link to="/projects">Projects</Link>
            </div>
        </div>
    );
}
export default Navbar;