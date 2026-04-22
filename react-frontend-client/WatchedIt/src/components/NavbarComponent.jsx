import { Link } from "react-router-dom";
import '../index.css'

function Navbar() {
    return (

        <nav id="nav-bar">

            <Link to="/" className= "logo"> WatchedIt </Link>

            <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/add">Add Show</Link>
            </div>
        </nav>
    );
}

export default Navbar;