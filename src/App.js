
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { createContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute'
import Home from "./components/Home/Home/Home";
import Login from './components/Login/Login/Login';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AddService from './components/Dashboard/AddService/AddService';
import MakeAdmin from './components/Dashboard/MakeAdmin/MakeAdmin';
import OrderList from './components/Dashboard/OrderList/OrderList';
import UserDashboard from './components/UserDashboard/UserDashboard/UserDashboard';
import Book from './components/UserDashboard/Book/Book';
import Review from './components/UserDashboard/Review/Review';
import BookList from './components/UserDashboard/BookList/BookList';
 
export const UserContext = createContext();
 
function App() {
  const [loggedInUser, setLoggedInUser] = React.useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <PrivateRoute path="/dashboard/service">
               <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/addService">
              <Dashboard></Dashboard>
              <AddService></AddService>
          </Route>
          <Route path="/makeAdmin">
            <Dashboard></Dashboard>
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path="/orderList">
            <Dashboard></Dashboard>
            <OrderList></OrderList>
          </Route>
          <PrivateRoute path="/userDashboard/service">
            <UserDashboard></UserDashboard>
          </PrivateRoute>
          <Route path="/book">
            <UserDashboard></UserDashboard>
            <Book></Book>
          </Route>
          <Route path="/review">
              <UserDashboard></UserDashboard>
              <Review></Review>
            </Route>
            <Route path="/bookList">
              <UserDashboard></UserDashboard>
              <BookList></BookList>
            </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
           <Route path="/home">
             <Home></Home>
           </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
