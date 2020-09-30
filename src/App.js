import React, { useEffect } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Home } from './pages';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch({ type: 'FETCH_PRODUCTLIST', payload: '' });
  }, [dispatch]);
  return (
    <Router>
      <Switch>
          <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
