import './App.css';
import { useDispatch, useSelector } from 'react-redux'

import { loadApp } from './actions';
import { useEffect } from 'react';

function App({children}) {
  const appState = useSelector(({appState}) => appState)
  console.log(appState);
  const dispatch = useDispatch();
  
  useEffect( () => {
    dispatch(loadApp())
  },[])

  return (
    <div className="App">
      <h1>My App</h1>
      <div>{appState.error}</div>
      {appState.loaded ? children : <h3>Loading....</h3>}
    </div>
  );
}

export default App;
