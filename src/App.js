import React, { Component } from 'react';
import Header from "./components/Header";
import Profiles from "./components/Profiles";
import Footer from "./components/Footer";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="bodyStyle">
        <Header />
        <Profiles/>
        <Footer />
      </div>
    );
  }
}

export default App;
