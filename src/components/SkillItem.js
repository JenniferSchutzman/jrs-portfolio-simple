const React = require('react')
const DataImage = require('./DataImage')

const SkillItem = props => {
  return (
    <div className="fl w-100 w-10-ns tc white">
      <article className="dim center">
        <div className="tc">
          <a href={props.skills.href} target="_blank">
            <DataImage
              className="br-100 h3 w3 dib ba b--black-05 pa2 bg-white"
              source={props.skills.imgFile}
              alt={props.skills.name}
            />
          </a>
        </div>
      </article>
    </div>
  )
}

module.exports = SkillItem
