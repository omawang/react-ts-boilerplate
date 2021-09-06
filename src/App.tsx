import React from 'react';

import { Provider } from 'react-redux';
import { DashboardPage, LoginPage } from '@Pages';
import { store } from '@Redux';
import { BaseRouter } from '@Router';

const App = () => (
  <Provider store={store}>
    <BaseRouter />
  </Provider>
);

export default App;
