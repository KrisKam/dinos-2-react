import React, { Component } from "react";
import SkillList from "./SkillList";
import "../App.css";

class Profiles extends Component {
  
  state = {
    // displaySkills: {
      0: false,
      1: false,
      2: false
    // }
  }

  toggleSkills = (i)=> {
    console.log("This is original state ", this.state)
    const newObj = {};
    newObj[i] = !this.state[i];
    const newState = Object.assign({}, this.state, newObj);
    this.setState(newState);
    console.log("This is newState: ", newState)
    console.log("This is the state :", this.state)
  }

  createProfile = () => {
    return this.props.dinos.map((dino, i) => {
      return (
        <li className="profile-card" key={i}> 
          <header className="profile-header" onClick={() => this.toggleSkills(i)} >
            <img src={dino.image} alt={dino.name}/>
            <h2>{dino.name}</h2>
          </header>
          <SkillList skills={dino.skills} display={this.state[i]}/>
        </li>
      );
    })
  }

  render() {
    return (
      <main>
        <section>
          <h2>Profiles</h2>
          <ul>
            {this.createProfile()}
          </ul>
        </section>
      </main>
    );
  }
}

export default Profiles;