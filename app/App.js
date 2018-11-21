import React, { Fragment } from 'react';
import ListUsers from './containers/ListUsers';
import CreateUser from './containers/CreateUser';

const App = () => (
  <Fragment>
    <ListUsers />
    <CreateUser />
  </Fragment>
)

export default App;