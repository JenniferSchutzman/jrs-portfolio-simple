const React = require('react')
const ProjectCard = require('./ProjectCard')

const Projects = props => {
  return (
    <header id="projects" className="tc pv4 pv5-ns bg-black-10">
      <h1 className="f5 f4-ns fw6 black">Projects</h1>
      <h3 className="tc baskerville fw1 ph3 ph0-l">
        A showcase of my favorite projects.
      </h3>
      <div className="cf pa2">
        {props.portfolio.map((portfolioItem, index) => (
          <ProjectCard
            index={index}
            key={portfolioItem.name}
            info={portfolioItem}
          />
        ))}
      </div>
    </header>
  )
}

module.exports = Projects
