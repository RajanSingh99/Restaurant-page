import Contact from './Contact';
import Home from './Home';
import Menu from './Menu';
import Navbar from './Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/Menu">
            <Menu/>
          </Route>
          <Route path="/Contact">
            <Contact/>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
