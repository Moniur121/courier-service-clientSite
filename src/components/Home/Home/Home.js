import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
 import Header from '../Header/Header'
import ServiceDuration from '../ServiceDuration/ServiceDuration';
import Service from '../Service/Service';
import Review from '../Review/Review';
import Footer from '../Footer/Footer';
 
const Home = () => {
    return (
        <div>
              <Header></Header>
              <ServiceDuration></ServiceDuration>
              <AboutUs></AboutUs>
              <Service></Service>
              <Review></Review>
              <Footer></Footer>
        </div>
    );
};

export default Home;