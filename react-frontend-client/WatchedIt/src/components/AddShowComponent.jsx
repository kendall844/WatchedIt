import { useState, useEffect } from "react";
import ShowService from "../services/ShowService";
import { useNavigate } from "react-router-dom";

const AddShowComponent = () => {
    const [title, setTitle] = useState("");
    const [rating, setRating] = useState("");
    const [type, setType] = useState("");
    const [review, setReview] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newShow = {
            title,
            type,
            review,
            rating: Number(rating)
        };

        ShowService.createShow(newShow)
            .then(() => {
                setTitle("");
                setRating("");
                setType("");
                setReview("");
                navigate("/");
            })
            .catch(err => console.log(err));
    };

    useEffect(() => {
        document.title = "Add a Show";
    }, []);

    return (
        <div>
            <h2>Add Show</h2>

            <form onSubmit={handleSubmit}>
                <div className="form-section">
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>

                <div className="form-section">
                    <label>Rating:</label>
                    <input
                        type="number"
                        min="0"
                        max="10"
                        step="0.1"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        required
                    />
                </div>

                <div className="form-section">
                    <label>Type:</label>
                    <select
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        required
                    >
                        <option value="">Select Type</option>
                        <option value="movie">Movie</option>
                        <option value="tv">TV Show</option>
                    </select>
                </div>

                <div className="form-section">
                    <label>Review:</label>
                    <textarea
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        required
                    />
                </div>

                <button type="submit">Add Show</button>
            </form>
        </div>
    );
};

export default AddShowComponent;