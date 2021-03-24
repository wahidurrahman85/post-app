import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './componants/Home/Home';
import PostDetail from './componants/PostDetail/PostDetail';

function App() {
  return (
    <div className="App">
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/home">Home2</Link>
          </li>
         
        </ul>

        <hr />

       
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
           <Home></Home>
          </Route>
          <Route path="/post/:id">
           <PostDetail></PostDetail>
          </Route>
        </Switch>
      </div>
    </Router>
  
    </div>
  );
}

export default App;
