// App.js
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Timeline from './components/timeline';

function App() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(true);

  return (
    <div className="container-fluid p-0 row">
      <div className=' col-lg-2  col-12'>
        <Navbar isNavbarOpen={isNavbarOpen} handleToggleNavbar={setIsNavbarOpen} />
      </div>
      
      <div className=' col-lg-10 col-md-12 col-12'>
        <Timeline isNavbarOpen={isNavbarOpen} handleToggleNavbar={setIsNavbarOpen} />
        <i className="bx bx-right-indent logt" onClick={() => setIsNavbarOpen(!isNavbarOpen)} />
      </div>
    </div>
  );
}

export default App;
