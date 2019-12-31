import React from "react"

class SkillTag extends React.Component {
  render() {
    const { skills } = this.props
 
    return (
      <ul className="skillTag">
      {skills.map(skill => (
        <li className="skill" key={skill}>
        {/* <a href="/"> */}
        <span>{skill}</span>
        {/* </a> */}
        </li>
      ))}
      </ul>
    )
  }
}

export default SkillTag
