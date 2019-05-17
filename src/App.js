import React from 'react';
import Navbar from './Components/Navbar.jsx';
import SetAsideApp from './Components/SetAside.jsx';
import Footer from './Components/Footer.jsx';

function App() {
  return (
    <div className="main-app">
      <Navbar />
      <SetAsideApp />
      <Footer />
    </div>
  );
}

export default App;
