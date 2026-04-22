import React, { useState, useEffect } from 'react';
import ShowService from '../ShowService';
import { Link, useParams } from 'react-router-dom';

const ShowListComponent = () => {
    const { type } = useParams();
    const [shows, setShows] = useState([]);

    const getPageTitle = () => {
        if (!type) return 'All Shows';
        if (type === 'TV Show') return 'TV Shows';
        if (type === 'Movie') return 'Movies';
        return type;
    };

    useEffect(() => {
        if (type) {
            ShowService.getShowsByType(type).then((res) => {
                setShows(Array.isArray(res.data) ? res.data : []);
                document.title = getPageTitle();
            });
        } else {
            ShowService.getShows().then((res) => {
                setShows(Array.isArray(res.data) ? res.data : []);
                document.title = 'All Shows';
            });
        }
    }, [type]);

    return (
        <div>

            <h2 className="text-center">
                {getPageTitle()}
            </h2>


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
            {type && (
                <div className="row">
                    <Link to="/" className="btn btn-secondary">
                        Back to All Shows</Link>
                </div>
            )}

        </div>
    );
};

export default ShowListComponent;