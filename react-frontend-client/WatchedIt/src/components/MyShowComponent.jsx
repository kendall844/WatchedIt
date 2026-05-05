import { useEffect, useState } from "react";
import ShowService from "../services/ShowService";

function MyShowsComponent() {
    const [shows, setShows] = useState([]);

    const loadShows = () => {
        ShowService.getShows().then(res => setShows(res.data));
    };

    useEffect(() => {
        loadShows();
    }, []);

    const handleDelete = async (id) => {
        await ShowService.deleteShow(id);
        loadShows();
    };

    const imageUrl = (path) =>
        path ? `https://image.tmdb.org/t/p/w300${path}` : "";

    return (
        <div>
            <h2>My Shows</h2>

            {shows.map(show => (
                <div key={show.id} className="item">

                    {show.poster_path && (
                        <img
                            src={imageUrl(show.poster_path)}
                            alt={show.title}
                            width="120"
                        />
                    )}

                    <h3>{show.title}</h3>
                    <p>{show.review}</p>
                    <p>Rating: {show.rating}</p>

                    <button onClick={() => handleDelete(show.id)}>
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
}

export default MyShowsComponent; 