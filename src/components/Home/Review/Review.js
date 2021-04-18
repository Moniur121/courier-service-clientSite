import React from 'react';
import ema from '../../../images/ema.png';
import wilson from '../../../images/wilson.png';
import Ellipse from '../../../images/Ellipse 3.png';
import ReviewDetails from '../ReviewDetails/ReviewDetails';
 
const Review = () => {
    const [review, setReview]= React.useState([]);
    React.useEffect(() => {
         fetch('https://enigmatic-tor-09306.herokuapp.com/getReview')
         .then(res=> res.json())
         .then(data=> setReview(data))
    }, [] )
    return (
        <section className="services-container mt-5 container">
        <div className=" pt-5">
            <h4 className="text-info">USER REVIEWS</h4>
            <h2 className="text-center" style={{color:'#3A4256'}}>We Provide Various Category <br/><span>Reviews Every User</span></h2>
        </div>
        <div className="d-flex justify-content-center">
            <div className="row  mt-5 pt-5">
                {
                    review.map(review=> <ReviewDetails review={review}></ReviewDetails>)
                }
            </div>
        </div>
    </section>
    );
};

export default Review;