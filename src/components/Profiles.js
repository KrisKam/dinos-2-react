import React, { Component } from "react";
import SkillList from "./SkillList";
import "../App.css";

class Profiles extends Component {

  state = {

  }

  createProfile = () => {
    this.props.dinos.map(dino => {
      return 
    })
  }

  render() {
    return (
      <main>
        <section>
          <h2>Profiles</h2>
          <div>
            <header>
              <img />
              <h2>dino name</h2>
            </header>
            <SkillList />
          </div>
        </section>
      </main>
    );
  }
}

export default Profiles;