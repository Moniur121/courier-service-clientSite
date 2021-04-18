import React from 'react';
import { Link } from 'react-router-dom';

const UserDashboard = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg    ">
                <div class="container-fluid">
                    <div >
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link to="/book" class="nav-link active text-dark">Book</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/bookList" class="nav-link active text-dark">BookList</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/review" class="nav-link active text-dark">Review</Link>
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

export default UserDashboard;