import React from 'react';
import DeliveryMan from '../../../images/icon/delivery-man.png';
import luggage from '../../../images/icon/luggage.png';
import truck from '../../../images/icon/truck.png';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
 
const Service = () => {
    const [service, setService] =React.useState([]);
    React.useEffect(() => {
         fetch('https://enigmatic-tor-09306.herokuapp.com/services')
         .then(res=> res.json())
         .then(data=> setService(data))
    }, [])
    console.log(service);
    return (
        <section className="services-container mt-5 container pt-5">
            <div className=" pt-5">
                <h4 className="text-info">OUR SERVICE</h4>
                <h2 className="text-center" style={{color:'#3A4256'}}>We Provide Various Category <br/><span>Delivery Services</span></h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="row  mt-5 pt-5">
                    {
                        service.map(service=> <ServiceDetails service={service}></ServiceDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Service;