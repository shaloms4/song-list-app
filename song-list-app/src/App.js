import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SongsPage from './pages/SongsPage';
import ContactPage from './pages/ContactPage';
import Footer from './pages/Footer';


function App() {
  return (
    <Provider store={store}>
      <div>
        <HomePage /> 
        <AboutPage />
        <SongsPage/>
        <ContactPage/>
        <Footer/>
      </div>
    </Provider>
  );
}

export default App;
