import React, { Component } from 'react'
import logo from '../logo.svg'
import '../App.css'
import fetch from 'isomorphic-fetch'
import { pathOr } from 'ramda'

const url = '/db.json'

class Portfolio extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataLoadingState: 'Loading',
      profileData: null
    }
  }

  componentDidMount() {
    fetch(url)
      .then(res => res.json())
      .then(profileData => {
        this.setState({ dataLoadingState: 'Loaded', profileData: profileData })
      })
      .catch(err => console.log(err))
  }

  render() {
    const name = pathOr('', ['about', 'name'], this.state.profileData)

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome, {name}</h1>
        </header>
      </div>
    )
  }
}

export default Portfolio
