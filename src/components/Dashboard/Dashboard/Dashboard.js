
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg    ">
                <div class="container-fluid">
                    <div >
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link to="/orderList" class="nav-link active text-dark">Oder List</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/addService" class="nav-link active text-dark">Add Service</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/makeAdmin" class="nav-link active text-dark">Make Admin</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/manageService" class="nav-link active text-dark">Manage Service</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/home" class="nav-link active text-dark">Home</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Dashboard;