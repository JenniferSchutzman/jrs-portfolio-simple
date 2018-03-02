const React = require('react')
const DataImage = props => {
  //here we are setting a safetfy default style setting
  const style = {
    width: '275px',
    margin: '10px 5px 0px 5px'
  }

  //Here we are making a reusable data image component
  //to apply to all the new props
  const img = props.className ? (
    <img alt={props.alt} src={props.source} className={props.className} />
  ) : (
    <img alt={props.alt} src={props.source} style={style} />
  )
  return img
}

module.exports = DataImage
