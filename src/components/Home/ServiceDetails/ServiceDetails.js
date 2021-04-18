import React from 'react';
import ServiceForm from '../ServiceForm/ServiceForm';
import './ServiceDetails.css';
const ServiceDetails = ({service}) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className="col-md-4 text-center service-card  ">
            <img className="img-fluid" src={service.file} style={{height:'50px'}} alt=""/>
            <h3 className="mt-3  mb-3">{service.name}</h3>
            <p >{service.description}</p>
            <button onClick={openModal}  className="btn btn-warning">GET SERVICE</button>
            <ServiceForm modalIsOpen={modalIsOpen} closeModal={closeModal} services={service.name}></ServiceForm>
        </div>
    );
};

export default ServiceDetails;