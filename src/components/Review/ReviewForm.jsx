import React, { useState, useEffect } from 'react';
import './ReviewForm.css';

const ReviewForm = () => {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    review: ''
  });

  useEffect(() => {
    fetch('/review')
      .then(response => response.json())
      .then(data => setReviews(data))
      .catch(error => console.error('Error:', error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addReview(formData);
  };

  const addReview = (review) => {
    fetch('/review', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(review),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        setReviews(data.allReviews);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="review-container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-content">
          <h2>Leave a Review</h2>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="review">Review:</label>
            <textarea
              id="review"
              name="review"
              rows="4"
              cols="50"
              placeholder="Write your review here..."
              value={formData.review}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
