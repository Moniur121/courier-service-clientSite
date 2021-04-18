import React from 'react';
import HeaderBg from '../../../images/header-bg.jpg';
const HeaderMain = () => {
    return (
        <main style={{ height: '600px' }} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <span>SINCE 1992</span>
                <h1 style={{ color: '#3A4256' }}>We are Experts in <br />Global Courier Services</h1>
                <small className="text-muted">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, vitae soluta modi excepturi esse impedit possimus voluptatum quidem doloribus veritatis.</small><br /><br />
                <button className="btn btn-warning">GET SERVICE</button>
            </div>
            <div className="col-md-6">
                <img className="img-fluid" src={HeaderBg} alt="" />
            </div>
        </main>
    );
};

export default HeaderMain;