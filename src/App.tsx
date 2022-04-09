import React from 'react'
import LogIn from "./components/LogIn"
import SingUp from "./components/SingUp"
import LogOut from "./components/LogOut"
import Reload from "./components/Reload"
import Home from "./components/Home"
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


import Forecast from './components/Forecast'


//import Home from "./Home"





function App() {

  const user = localStorage.getItem('logged');
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-success">
       
        {user ? (
          <div className="navbar-nav justify-between ml-auto ">
            
            <div className="hover:text-blue-100 hover:scale-125 navbar-brand">
              <Link to={"/forecast"} className="text-white   ">
                Forecast
              </Link>
            </div>

            <Link to={"/"} className="nav-link">
              panda
            </Link>
            
            <li className="nav-item">
              <a href="/logout" className="nav-link" /*onClick={this.logOut}*/>
                Logout
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Sing in
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/singup"} className="nav-link">
                Sing up
              </Link>
            </li>
          </div>
        )}
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path="/singup" component={SingUp} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/logout" component={LogOut} />
          <Route exact path="/logout" component={Reload} />
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path="/forecast" component={Forecast} />


        </Switch>
      </div>



      { /*<AuthVerify logOut={this.logOut}/> */}

    </div>
  );

}

export default App;