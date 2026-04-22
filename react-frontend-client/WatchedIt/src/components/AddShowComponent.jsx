import { useState, useEffect } from 'react';
import ShowService from '../ShowService';
import { useNavigate } from 'react-router-dom';

const AddShowComponent = () => {
    const [title, setTitle] = useState('');
    const [rating, setRating] = useState('');
    const [type, setType] = useState('');
    const [review, setReview] = useState('');
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        const newShow = { title, rating: Number(rating), type, review };
        ShowService.createShow(newShow).then(() => {
            setTitle('');
            setRating('');
            setType('');
            setReview('');
            navigate('/');
        });
    };

    useEffect(() => {
        document.title = 'Add a Show';
    }, []);
    return (
        <div>
            <h2>Add Show</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-section">
                    <label>Title:</label>
                    <input type="text" className="handle-form"
                        value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div className="form-section">
                    <label>Rating:</label>
                    <input type="number" min="0" max="10" step="0.1" className="handle-form"
                        value={rating} onChange={(e) => setRating(Number(e.target.value))} required />
                </div>
                <div className="form-section">
                    <label>Type:</label>
                    <select value={type} onChange={(e) => setType(e.target.value)} required>
                        <option value="">Select Type</option>
                        <option value="Movie">Movie</option>
                        <option value="TV Show">TV Show</option>
                    </select>
                </div>
                <div className="form-section">
                    <label>Review:</label>
                    <textarea className="handle-form"
                        value={review} onChange={(e) => setReview(e.target.value)} required />
                </div>
                <button type="submit" className='btn btn-primary mt-3'>Add Show</button>
            </form>
        </div>
    );

}
export default AddShowComponent;