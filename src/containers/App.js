import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import FAQContainer from '../containers/FAQContainer';
import LauncherList from '../components/LauncherList';
import LauncherShow from '../components/LauncherShow';
import NavBar from '../components/NavBar';

const App = props => {
  return(
    <Router history={browserHistory} >
      <Route path='/' component={NavBar} >
        <IndexRoute component={FAQContainer} />
        <Route path="/launchers" component={LauncherList} />
        <Route path="/launcher/:id" component={LauncherShow} />
      </Route>
    </Router>
  )
}

export default App;
