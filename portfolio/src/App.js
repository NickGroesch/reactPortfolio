import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Splash from './pages/Splash'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import './App.css';

function App() {
  return (
    <div className='background' >
      <BrowserRouter>
        <div className='main'>
          <Navbar />
          <Route exact path={'/'} component={Splash} />
          {/* <Route exact path={'/contact'} component={Contact} />
          <Route exact path={'/projects'} component={Projects} />
          <Route exact path={'/resume'} component={Resume} /> */}
        </div>
      </BrowserRouter>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
