import React, { Component } from "react";
import SkillList from "./SkillList";
import "../App.css";


class Profiles extends Component {

  render() {
    return (
      <main>
        <section>
          <h2>Profiles</h2>
          <SkillList />
        </section>
      </main>
    );
  }
}

export default Profiles;