import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faPlus, faGripHorizontal, faUsers, faClipboard} from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/service/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/service/orderList" className="text-white">
                        <FontAwesomeIcon icon={faClipboard} /> <span>Order List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/service/addService" className="text-white">
                        <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                    </Link>
                </li>
                <li>
                    <Link to="/service/makeAdmin" className="text-white">
                        <FontAwesomeIcon icon={faUsers} /> <span>Make Admin</span>
                    </Link>
                </li>
                <li>
                    <Link to="/service/manageService" className="text-white" >
                        <FontAwesomeIcon icon={faCog} /> <span>Manage Service</span>
                    </Link>
                </li>
                 
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;