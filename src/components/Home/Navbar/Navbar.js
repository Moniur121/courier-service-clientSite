import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
            <div class="container-fluid">
                <h3 class="nav-link me-5 active text-warning" aria-current="page" href="#">SA Courier Services</h3>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto  ">
                        <li class="nav-item">
                            <a class="nav-link me-5 active text-light" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                           <Link to="/userDashboard/service"> <a class="nav-link me-5 active text-light" aria-current="page" href="#">Dashboard</a></Link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link me-5 active text-light" aria-current="page" href="#">Blog's</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link me-5 active text-light" aria-current="page" href="#">Contact Us</a>
                        </li>
                        <li class="nav-item">
                            <Link to="/dashboard/service"><a class="nav-link me-5 active text-light" aria-current="page" href="#">Admin</a>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/login"><a class="nav-link me-5 active text-light" aria-current="page" href="#">LogIn</a>
                            </Link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;