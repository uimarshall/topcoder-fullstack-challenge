import React from 'react';
import Search from './Search';
import { Route } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Route render={({ history }) => <Search history={history} />} />
    </>
  );
};

export default Header;
