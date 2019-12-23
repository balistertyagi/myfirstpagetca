import React from 'react';
import logo from './logo.svg';
import './App.css';

// import DemoCarousel from './components/DemoCarousel';
import Menu from './components/Menu';
import Header from './components/Header';
import Usp from './components/Usp';
import Lectus from './components/Lectus';
import Gallery from './components/Gallery';
import Volutpat from './components/Volutpat';
import Footer from './components/Footer';
import Right from './components/Right';



function App() {
  return (
    <div className="App">
      <Menu /><Header /><Usp /><Gallery /><Lectus /><Volutpat /><Footer /><Right />
    </div>
  );
}

export default App;