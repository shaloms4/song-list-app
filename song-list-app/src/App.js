import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Provider store={store}>
      <div>
        <HomePage /> {}
      </div>
    </Provider>
  );
}

export default App;
