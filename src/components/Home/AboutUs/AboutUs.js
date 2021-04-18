import React from 'react';
import './AboutUs.css';
import aboutMeMen from '../../../images/about-men.png';
const AboutUs = () => {
    return (
        <div className="container mt-5">
            <h1 className="text-success">ABOUT US</h1>
            <hr/>
            <main  className="row d-flex   ">
                <div className="col-md-6">
                     <h1>We're leading <span>Courier</span><br/><span>Service</span>in Worldwide</h1>
                     <p>We are serve worldwide site lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea enim et, similique, minus soluta ducimus.</p>
                     <p>1. Since our launch in 1995, to deliver high value package.</p>
                     <p>2. We always provide flexible & quality task.</p>
                     <p>3. Unique latest machinary used the Logistics project.</p>
                     <div className="d-flex">
                         <div className="col-md-6">
                            <h1><span className="yearSuccess">25</span> <br/><small>Years of Success</small></h1>
                         </div>
                         <div className="col-md-6">
                            <h3>Since we established in 1995 experience & still a growing protfolio day by day!</h3>
                         </div>
                     </div>
                </div>
                <div className="col-md-6">
                    <img className="img-fluid" src={aboutMeMen} alt="" />
                </div>
            </main>
        </div>
    );
};

export default AboutUs;