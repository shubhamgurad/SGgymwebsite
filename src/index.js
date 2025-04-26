// import React from 'react'
// import { createRoot } from 'react-dom/client'
// import { Provider } from 'react-redux'
// import 'core-js'

// import App from './App'
// import store from './store'

// createRoot(document.getElementById('root')).render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// )


import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import 'core-js';

import App from './App';
import store from './store';
import { ThemeProvider } from '../src/views/sidebarpages/ThemeContext';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Provider>
);
