import React, { useState, useEffect } from 'react';
import ShowService from '../ShowService';
import { Link, useParams } from 'react-router-dom';

const ShowListComponent = () => {
    const { type } = useParams();
    const [shows, setShows] = useState([]);

    useEffect(() => {
        if (type) {
            ShowService.getShowByType(type).then((res) => {
                setShows(res.data);
                document.title = `Shows - ${type}`;
            });
        } else {
            ShowService.getShows().then((res) => {
                console.log("API URL:", import.meta.env.VITE_API_URL);
                setShows(res.data);
                document.title = 'All Shows';
            });
        }
    }, [type]);

    return (
        <div>

            <h2 className="text-center">
                {type ? `${type} Shows` : 'All Shows'}
            </h2>

            <div className="row">
                <Link to="/add" className="btn btn-primary">
                    Add Show
                </Link>
            </div>

            <main className="items-container">

                {shows.length === 0 ? (
                    <p className="empty">No shows found</p>
                ) : (
                    shows.map((show) => (
                        <article className="item" key={show.id}>
                            <div className="text">

                                <h3>
                                    {show.id}: {show.title}
                                </h3>

                                <p>Rating: {show.rating}</p>
                                <p>Type: {show.type}</p>
                                <p>{show.review}</p>

                                <p>
                                    <Link to={`/shows/type/${show.type}`}>
                                        {show.type}
                                    </Link>
                                </p>

                            </div>
                        </article>
                    ))
                )}

            </main>
        </div>
    );
};

export default ShowListComponent;