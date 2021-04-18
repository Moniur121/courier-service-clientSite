import React from 'react';
import './ReviewDetails.css'
const ReviewDetails = ({ review }) => {
    return (
        <div className="col-md-4   review-card">
            <div>
                <div>
                    <h3>{review.name}</h3>
                    <h6>{review.title}</h6>
                </div>
            </div>
            <div>
                <p>{review.description}</p>
            </div>
        </div>
    );
};

export default ReviewDetails;