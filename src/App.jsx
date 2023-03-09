import React from 'react';
import './App.css';
import {Routes , Route} from 'react-router-dom';
import {ERROR_ROUTE, PAGE_NOT_FOUND_ROUTE} from './constants/routes';
import {Error, PageNotFound} from './pages';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path={ERROR_ROUTE} element={<Error />} />
        <Route path={ PAGE_NOT_FOUND_ROUTE} element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;