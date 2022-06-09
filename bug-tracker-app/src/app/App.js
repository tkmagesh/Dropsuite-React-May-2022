import './App.css';
import { useDispatch, useSelector } from 'react-redux'

import { loadApp } from './actions';
import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from '../home'
import Bugs from '../bugs';
import Projects from '../projects';


function App() {
  const appState = useSelector(({appState}) => appState)

  const dispatch = useDispatch();
  
  useEffect( () => {
    dispatch(loadApp())
  },[])

  return (
    <div className="App">
      <h1>My App</h1>
      <div>{appState.error}</div>
      {!appState.loaded ? <h3>Loading....</h3> :
        <Router>
          <div>
              <div>
                <span>
                  [ <Link to="/">Home</Link> ]
                </span>
                <span>
                  [ <Link to="/projects">Projects</Link> ]
                </span>
                <span>
                  [ <Link to="/bugs">Bugs</Link> ]
                </span>
              
            </div>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/projects">
                <Projects />
              </Route>
              <Route path="/bugs">
                <Bugs />
              </Route>
            
            </Switch>
          </div>
        </Router>
      }
    </div>
  );
}

export default App;
