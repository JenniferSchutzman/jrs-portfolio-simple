const React = require('react')
//these below settings are all in TACHYONS format
///flex items-center  makes items Center
//justify-center makes text center
//pa4 padding 4
//bg-lightest-blue navy" sets the color of the background using techions
///svg is scalable visual graphics, sclaes made up of data

const Loading = () => {
  return (
    <div className="flex items-center justify-center pa4 bg-lightest-blue navy">
      <svg className="w1" data-icon="info" viewBox="0 0 32 32">
        <title>info icon</title>
        <path d="M16 0 A16 16 0 0 1 16 32 A16 16 0 0 1 16 0 M19 15 L13 15 L13 26 L19 26 z M16 6 A3 3 0 0 0 16 12 A3 3 0 0 0 16 6" />
      </svg>
      <span className="lh-title ml3">Loading...</span>
    </div>
  )
}

module.exports = Loading
