
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Header from './Pages/Shared/Header';



function App() {
  return (
    <div className="App">
       <Router>
         <Header/>
         <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    
    </Router>
    </div>
  );
}

export default App;
