const React = require('react')
const SkillCard = require('./SkillCard')
const Skills = props => {
  return (
    <header id="skills" className="tc pv4 pv5-ns bg-white">
      <h1 className="f5 f4-ns fw6 black">Skills</h1>
      <h3 className="tc baskerville fw1 ph3 ph0-l">
        I have experience in the following tools and technologies:
      </h3>
      <div className="cf">
        {props.skills.map((skill, index) => (
          <SkillCard index={index} key={index} info={skill} />
        ))}
      </div>
    </header>
  )
}

module.exports = Skills
