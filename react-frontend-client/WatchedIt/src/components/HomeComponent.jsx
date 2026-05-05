import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPopular } from "../services/tmdbService";

function HomeComponent() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getPopular("movie").then(setMovies);
    }, []);

    return (
        <div>
            <h1>🎬 Popular Movies</h1>

            <div className="container">

                <div className="hero">
                    <h1>Welcome to WatchedIt</h1>
                    <p>Track your movies and TV shows in one place.</p>

                    <Link to="/signup" className="cta-button">
                        Get started now: Create account
                    </Link>
                </div>

            </div>

            <div className="grid">
                {movies.map((m) => (
                    <div key={m.id}>
                        <img
                            src={`https://image.tmdb.org/t/p/w200${m.poster_path}`}
                        />
                        <h4>{m.title}</h4>
                        <p>⭐ {m.vote_average}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomeComponent;