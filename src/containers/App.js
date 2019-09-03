import React from 'react';
import './App.css';
import '../components/Header/Header'
import '../components/MemeGenerator/MemeGenerator'
import Header from '../components/Header/Header';
import MemeGenerator from '../components/MemeGenerator/MemeGenerator';

function App() {
  return (
    <div className="App">
      <Header />
      <MemeGenerator />
    </div>
  );
}

export default App;
