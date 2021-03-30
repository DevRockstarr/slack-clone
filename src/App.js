import React from 'react';
import './App.css';
import Header from './Header';

function App() {
  return (
    // BEM naming convention
    <div className="app">
      <h1> Hello People. This is slack clone :rock </h1>
      {/* Header */}
      <Header />
      {/* Sidebar */}
      {/* React-Router -> Chat Screen */}
    </div>   
  );
}

export default App;
