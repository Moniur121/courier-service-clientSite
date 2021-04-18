import React from 'react';
import './ServiceDuration.css';
import FlatRate from '../../../images/icon/flat-rate.png';
import hours from '../../../images/icon/24-hours.png';
import estimate from '../../../images/icon/estimate.png';
const ServiceDuration = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 d-flex card-container">
                    <div>
                        <img src={FlatRate} alt="" />
                    </div>
                    <div className="ms-5">
                        <h4 className="text-danger">Flat Rate Fees</h4>
                        <small className="text-muted">It is a long established fact that and reader will by the readable based</small>
                    </div>
                </div>
                <div className="col-md-4 d-flex card-container">
                    <div>
                        <img src={hours} alt="" />
                    </div>
                    <div className="ms-5">
                        <h4 className="text-danger">24/7 Services</h4>
                        <small className="text-muted">It is a long established fact that and reader will by the readable based.</small>
                    </div>
                </div>
                <div className="col-md-4 d-flex card-container">
                    <div>
                        <img src={estimate} alt="" />
                    </div>
                    <div className="ms-5">
                        <h4 className="text-danger">24/7 Services</h4>
                        <small className="text-muted">It is a long established fact that and reader will by the readable based.</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDuration;