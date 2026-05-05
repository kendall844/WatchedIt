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

    return (
        <div className="container">
            <h2>My Shows</h2>

            {shows.length === 0 ? (
                <p className="empty">No shows found</p>
            ) : (
                shows.map(show => (
                    <div key={show.id} className="item">

                        {show.poster_path && (
                            <img
                                src={`https://image.tmdb.org/t/p/w300${show.poster_path}`}
                                alt={show.title}
                            />
                        )}

                        <div className="text">
                            <h3>{show.title}</h3>
                            <p>{show.review}</p>
                            <p>Rating: {show.rating}</p>

                            <button onClick={() => handleDelete(show.id)}>
                                Delete
                            </button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}

export default MyShowsComponent;