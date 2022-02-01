
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Header from './Pages/Shared/Header';
import Login from './Pages/Login/Login';
import Appointment from './Pages/Appointment/Appointment/Appointment';



function App() {
  return (
    <div className="App">
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
          <Route path="/appointment">
            <Appointment></Appointment>
          </Route>
          <Route path="*">
            <Home />
          </Route>
        </Switch>
    
    </Router>
    </div>
  );
}

export default App;
