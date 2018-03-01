const React = require('react')
const DataImage = require('./DataImage')

const About = props => {
  return (
    <header id="about" className="tc pv4 pv5-ns bg-black">
      <DataImage className="br2" source={props.about.imgFile} alt="avatar" />
      <h1 className="f5 f4-ns fw6 near-white">{props.about.name}</h1>
      <h2 className="f6 washed-blue fw2 ttu tracked">{props.about.location}</h2>
      <p className="f6 washed-blue fw2 ttu tracked">{props.about.desc}</p>
    </header>
  )
}

module.exports = About
