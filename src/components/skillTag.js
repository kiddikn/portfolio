import React from "react"

class SkillTag extends React.Component {
  render() {
    const { skills } = this.props
 
    return (
      <ul className="skillTag">
      {skills.map(skill => (
        <li>
        <a href="/">
        {skill}
        </a>
        </li>
      ))}
      </ul>
    )
  }
}

export default SkillTag
