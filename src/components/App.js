import React from 'react';
import CreateLink from './CreateLink';
import Header from './Header';
import LinkList from './LinkList';
import { Routes, Route, Redirect } from 'react-router-dom';
import Login from './Login';
import Search from './Search';

const App = () => {
  return (
    <div className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Routes>
          <Route exact path="/" element={<LinkList/>} />
          <Route
            exact
            path="/create"
            element={<CreateLink/>}
          />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/search' element={<Search />} />
          <Route exact path="/top" component={LinkList} />
          <Route 
            exact path='/new/:page'
            element={<LinkList />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
