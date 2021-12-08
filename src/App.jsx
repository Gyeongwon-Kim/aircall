import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Header.jsx';
import ActivityFeed from './components/activity/ActivityFeed.jsx';
import ActivityDetail from './components/activity/ActivityDetail.jsx';

const App = () => {
  return (
    <Router>
      <div className='container'>
        <Header/>
        <Routes>
          <Route path='/' element={<ActivityFeed/>} />
          <Route path='/detail/:id' element={<ActivityDetail/>} />
        </Routes>
      </div>
    </Router>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
