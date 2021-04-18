import React from 'react';

const Review = () => {
    const [review, setReview] = React.useState({});
    const handleBlur = e => {
        const newInfo = { ...review };
        newInfo[e.target.name] = e.target.value;
        setReview(newInfo);
    }

    const handleSubmit = () => {

        fetch("https://enigmatic-tor-09306.herokuapp.com/addReview", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(review)
        })
    }
    return (
    
    <div>

        <section className="container-fluid row">

            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Book Review</h5>
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                        <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Name" />
                    </div>
                    <div className="form-group mb-3">
                        <input onBlur={handleBlur} type="text" className="form-control" name="title" placeholder="Title" />
                    </div>
                    <div className="form-group mb-3">
                        <input onBlur={handleBlur} type="text" className="form-control" name="description" placeholder="Description" />
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">Submit</button>
                </form>
            </div>
        </section>
    </div>
    );
};

export default Review;