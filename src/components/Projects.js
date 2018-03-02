import { map } from 'ramda'
const React = require('react')
const ProjectCard = require('./ProjectCard')

/*data is coming in from db.json as props.portfolio
  {
    "name": "Project A",
    "desc": "Project A is the first project.",
    "href": "https://ta.co",
    "img": "/green.atom-sample.png"
  },

cardData below now represents objects inside the Portfolio array
*/

const Projects = props => {
  return (
    <header id="projects" className="tc pv4 pv5-ns bg-black-10">
      <h1 className="f5 f4-ns fw6 black">Projects</h1>
      <h3 className="tc baskerville fw1 ph3 ph0-l">
        Here are my latest projects. Click on the the project image for a full
        description.
      </h3>
      /* divs are a great way to wrap text in a csss style; pa */
      <div className="cf pa2">
        {map(
          cardData => <ProjectCard key={cardData.name} cardData={cardData} />,
          props.portfolio
        )}
      </div>
    </header>
  )
}
module.exports = Projects
