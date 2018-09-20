import React, { Component } from "react";
import "../App.css";

class SkillList extends Component {
 
  createSkillsList = () => {
    return this.props.skills.map((skill, i) => {
      return (
        <li key={i}>{skill}</li>
      );
    })
  }

  render() {
    if (this.props.display) {
      return (
        <section>
          <h4>Skills</h4>
          <ul className="skills-list">
            {this.createSkillsList()}
          </ul>
        </section>
      );
    } else {
      return null;
    }
  }
}

export default SkillList;