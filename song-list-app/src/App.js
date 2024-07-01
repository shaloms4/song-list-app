import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import NavBar from './components/NavBar';  // Ensure the path is correct
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SongsPage from './pages/SongsPage';

function App() {
  return (
    <Provider store={store}>
      <div>
        <NavBar />  {/* Add NavBar component */}
        <HomePage />  {/* Add HomePage component */}
        <AboutPage />  {/* Add AboutPage component */}
        <SongsPage />  {/* Add SongsPage component */}
      </div>
    </Provider>
  );
}

export default App;
