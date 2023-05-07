import './App.css';
import Home from './components/home/Home';
import Pages from './pages/Pages';
import Footer from './components/footer/Footer';
import React from 'react';
import {HelmetProvider} from "react-helmet-async"

function App() {

  return (
    <HelmetProvider>
      <div className="App">
        <Home />
        <Pages />
        <Footer />
     </div>
    </HelmetProvider>
  
  );
 }

export default App;