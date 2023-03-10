import React from 'react';
import './App.css';
import {Routes , Route} from 'react-router-dom';
import {ERROR_ROUTE, PAGE_NOT_FOUND_ROUTE,DASHBOARD_ROUTE,COLLECTION_DETAILS_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE } from './constants/routes';
import {Error, PageNotFound, Dashboard, CollectionPage, Login, Register} from './pages';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path={`${ERROR_ROUTE}/:errorId`} element={<Error />} />
        <Route path={PAGE_NOT_FOUND_ROUTE} element={<PageNotFound />} />
        <Route path={DASHBOARD_ROUTE} element={<Dashboard />} />
        <Route path={`${COLLECTION_DETAILS_ROUTE}/:collectionId`} element={<CollectionPage />} />
        <Route path={LOGIN_ROUTE} element={<Login />} />
        <Route path={REGISTER_ROUTE} element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;