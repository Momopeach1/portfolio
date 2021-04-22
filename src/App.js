// import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from'./components/header/Header';
import Homepage from './components/Homepage';
import About from './components/About';
import Projects from './components/Projects';
import Hobbies from './components/Hobbies';

import history from './utilities/history';

function App() {
  return (
      <Router history={history}>
        <Header />
        <Switch>
          <Route path='/' exact component={Homepage}/>
          <Route path='/about' exact component={About}/>
          <Route path='/projects' exact component={Projects}/>
          <Route path='/hobbies' exact component={Hobbies}/>
        </Switch>
      </Router>
  );
}

export default App;
