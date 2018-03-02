import React, { Component } from 'react'
import '../App.css'
import fetch from 'isomorphic-fetch'
import { propOr } from 'ramda'
import Loading from '../components/Loading'
import About from '../components/About'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

const url = '/db.json'

class Portfolio extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataLoadingState: 'Loading',
      profileData: null
    }
  }
  /* This componentDidMount fetches the data and stores it the portfolio where the state lives
  Portolio is the parent that bootstraps itself up with its own data.
  The rest ot the components will be stateless functions */
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
        <About about={this.state.profileData.about} />
        <Projects portfolio={this.state.profileData.portfolio} />
        <Skills skills={profileData.skills} />
      </div>
    )
  }
}

export default Portfolio
