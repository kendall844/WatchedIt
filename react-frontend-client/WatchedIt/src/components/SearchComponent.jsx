import { useState } from "react";
import { searchShows } from "../services/tmdbService";

function SearchComponent() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [type, setType] = useState("multi");

    const handleSearch = async () => {
        const data = await searchShows(query, type);
        setResults(data);
    };

    return (
        <div>
            <h2>Search Shows</h2>

            <input
                placeholder="Search movies or TV shows..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />

            <select onChange={(e) => setType(e.target.value)}>
                <option value="multi">All</option>
                <option value="movie">Movies</option>
                <option value="tv">TV Shows</option>
            </select>

            <button onClick={handleSearch}>Search</button>

            <div className="results">
                {results.map((item) => (
                    <div key={item.id} className="card">
                        <img
                            src={
                                item.poster_path
                                    ? `https://image.tmdb.org/t/p/w200${item.poster_path}`
                                    : ""
                            }
                            alt=""
                        />

                        <h4>{item.title || item.name}</h4>

                        <p>⭐ {item.vote_average}</p>

                        <p>{item.media_type}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SearchComponent;