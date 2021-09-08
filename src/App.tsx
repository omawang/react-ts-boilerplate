import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@Redux';
import { BaseRouter } from '@Router';
import { ThemeConfig } from '@Theme';

const App = () => (
  <Provider store={store}>
    <ThemeConfig>
      <BaseRouter />
    </ThemeConfig>
  </Provider>
);

export default App;
