import React, { Component } from 'react'
import logo from '../logo.svg'
import '../App.css'
import fetch from 'isomorphic-fetch'
import { propOr } from 'ramda'
import About from '../components/About'
import Loading from '../components/Loading'
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
    const dataLoadingState = propOr(null, 'dataLoadingState', this.state)
    const profileData = propOr(null, 'profileData', this.state)

    if (dataLoadingState === 'Loading') {
      return <Loading />
    }

    return (
      <div>
        <About about={profileData.about} />
      </div>
    )
  }
}

export default Portfolio
