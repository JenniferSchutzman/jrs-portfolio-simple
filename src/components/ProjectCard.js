const React = require('react')
const DataImage = require('./DataImage')

/*
The props.cardData will come in like this:
(we first add an image)

w-25-ns w-50-m :this means width 25 when not small and width 50 with medium

ph3 ma3: this created spacing bewteen each projectCard time, ph3 added padding and ma3 added margins
*/

const ProjectCard = props => {
  return (
    <article className="fl center dim w-25-ns w-50-m w-100 ph3 ma3 pa4-ns">
      <a
        href={props.cardData.href}
        target="_blank"
        className="no-underline black"
      >
        <div className="tc">
          <DataImage
            className="br-100 h4 w4 dib"
            source={props.cardData.img}
            alt={props.cardData.name}
          />
          <h1 className="f4">{props.cardData.name}</h1>
          <hr className="mw3 bb bw1 b--black-10" />
        </div>
        <p className="lh-copy measure center f6 black-70">
          This page contains all of the latest projects.
        </p>
      </a>
    </article>
  )
}

module.exports = ProjectCard
