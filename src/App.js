
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home';

import Login from './Pages/Login/Login';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Register from './Pages/Register/Register';
import Authprovider from './Context/Authprovider';
import Privateroute from './Pages/Login/PrivateRout/Privateroute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';





function App() {
  return (
    <div className="App">
      <Authprovider>
        <Router>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/users">
              <Home />
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Privateroute path="/dashboard">
              <Dashboard></Dashboard>
            </Privateroute>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Privateroute path="/appointment">
              <Appointment></Appointment>
            </Privateroute>
            <Route path="*">
              <Home />
            </Route>
          </Switch>

        </Router>
      </Authprovider>
    </div>
  );
}

export default App;
