import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '@Redux';
import { Routes } from '@Routes';
import { ThemeConfig } from '@Theme';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <ThemeConfig>
        <Routes />
      </ThemeConfig>
    </BrowserRouter>
  </Provider>
);

export default App;
