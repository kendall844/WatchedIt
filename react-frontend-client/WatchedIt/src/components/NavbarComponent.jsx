import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";

function Navbar() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const checkAuth = async () => {
        try {
            const res = await fetch("http://localhost:3000/api/auth/account", {
                credentials: "include"
            });

            if (!res.ok) {
                setUser(null);
                return;
            }

            const data = await res.json();
            setUser(data);
        } catch {
            setUser(null);
        }
    };

    useEffect(() => {
        checkAuth();
    }, []);

    const handleLogout = async () => {
        await fetch("http://localhost:3000/api/auth/logout", {
            method: "POST",
            credentials: "include"
        });

        setUser(null);
        navigate("/login");
    };

    return (
        <nav id="nav-bar">

            <Link to="/" className="logo">WatchedIt</Link>

            <div className="nav-links">
                <Link to="/search">Search</Link>
                <Link to="/my-shows">My Shows</Link>
                <Link to="/add">Add Show</Link>

                {!user ? (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Signup</Link>
                    </>
                ) : (
                    <>
                        <span>Welcome, {user.displayname}</span>
                        <button onClick={handleLogout}>
                            Logout
                        </button>
                    </>
                )}
            </div>
        </nav>
    );
}

export default Navbar;