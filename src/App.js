import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Card from './components/Card';
import {Title, CardContainer} from "./components/styles/navbar.styled"
import React from 'react';

function App() {

  return (
    <div className="App">
     <Navbar />
     <Title>Title demo blablabla</Title>
     <div className='main'>
      <CardContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardContainer>
     </div>
     <Footer />
    </div>
  );
 }

export default App;