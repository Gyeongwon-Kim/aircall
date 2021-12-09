import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Header from './Header.jsx';
import ActivityFeed from './components/activity/ActivityFeed.jsx';
import ActivityDetail from './components/activity/ActivityDetail.jsx';

const isArchivedFeeds = false;

function reducer(state = isArchivedFeeds, action) {
  if (action.type === 'reverse') {
    return !state
  } else {
    return state;
  }
}

let store = createStore(reducer);

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

ReactDOM.render(
  <Provider store={store}>
      <App/>
  </Provider>,
  document.getElementById('app')
);

export default App;
