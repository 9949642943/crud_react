import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';  
import  CreateUser  from './components/CreateUser';
import   Home  from './components/Home';

import UpdateUser from './components/UpdateUser';
import {GlobalProvider} from './context/GlobalState';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div style={{ maxWidth: "30rem", margin: "5rem auto"}}>
      <GlobalProvider>
        <Router>
          <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/create" component={CreateUser} />
          <Route path="/update/:id" component={UpdateUser} />
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
