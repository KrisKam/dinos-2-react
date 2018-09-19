import React, { Component } from 'react';
import Header from "./components/Header";
import Profiles from "./components/Profiles";
import Footer from "./components/Footer";
import dinos from "../src/dinosaurs.json";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="bodyStyle">
        <Header />
        <Profiles dinos={dinos}/>
        <Footer />
      </div>
    );
  }
}

export default App;
