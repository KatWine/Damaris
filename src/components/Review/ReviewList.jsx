import React, { useState, useEffect } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/reviews')
            .then(response => response.json())
            .then(data => {
                setReviews(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading reviews: {error.message}</p>;

    return (
        <div>
            <h1>Reviews</h1>
            <ul>
                {reviews.map(review => (
                    <li key={review.id}>{review.text}</li>
                ))}
            </ul>
        </div>
    );
};

export default Reviews;
