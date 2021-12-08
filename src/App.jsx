import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Header from './Header.jsx';
import ActivityFeed from './components/activity/ActivityFeed.jsx';
import ActivityDetail from './components/activity/ActivityDetail.jsx';

const App = () => {
  return (
    <Router>
      <div className='container'>
        <Header/>
        <Switch>
          <Route exact path='/' component={ActivityFeed} />
          <Route exact path='/detail/:id' component={ActivityDetail} />
        </Switch>
      </div>
    </Router>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
