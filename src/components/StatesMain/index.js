import {Component} from 'react'

import Loader from 'react-loader-spinner'
import Weather from '../Weather'
import Categories from '../Categories'
import './index.css'
import {StatesContainer, StateName} from './styledComponents'

const apiStatus = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class StatesMain extends Component {
  state = {
    currentApiStatus: apiStatus.initial,
    statesList: [],
    search: '',
    searchState: '',
  }

  componentDidMount() {
    this.getStates()
  }

  getStates = async () => {
    this.setState({currentApiStatus: apiStatus.inProgress})
    const url =
      'https://codejudge-question-artifacts-dev.s3.amazonaws.com/q-1458/data.json'
    const response = await fetch(url)
    const data = await response.json()
    if (response.ok === true) {
      this.setState({statesList: data, currentApiStatus: apiStatus.success})
    } else {
      this.setState({currentApiStatus: apiStatus.failure})
    }
  }

  onChangeState = event => {
    this.setState({search: event.target.value})
  }

  onKeyDownEnter = event => {
    if (event.key === 'Enter') {
      this.setState({searchState: event.target.value})
    }
  }

  renderEmpty = () => (
    <div className="empty-container">
      <img
        className="no-img"
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="nmo"
      />
    </div>
  )

  renderState = () => {
    const {statesList, search, searchState} = this.state
    if (searchState !== '') {
      return this.renderNewState()
    }

    const oneState = statesList[0]
    const {backgroundUrl, name, weather, categories} = oneState

    return (
      <div className="big-main">
        <div className="main-container">
          <StatesContainer backgroundurl={backgroundUrl}>
            <Weather weather={weather} />

            <StateName>{name}</StateName>
            <input
              value={search}
              onKeyDown={this.onKeyDownEnter}
              onChange={this.onChangeState}
              placeholder={name}
              type="search"
              className="search"
            />
          </StatesContainer>
        </div>
        <Categories categories={categories} />
      </div>
    )
  }

  renderNewState = () => {
    const {statesList, search, searchState} = this.state
    if (searchState === '') {
      return this.renderEmpty()
    }

    const newState = statesList.filter(each =>
      each.name.toLowerCase().includes(searchState),
    )

    const oneState = newState[0]
    const {backgroundUrl, name, weather, categories} = oneState

    return (
      <div className="big-main">
        <div className="main-container">
          <StatesContainer backgroundurl={backgroundUrl}>
            <Weather weather={weather} />

            <StateName>{name}</StateName>
            <input
              value={search}
              onKeyDown={this.onKeyDownEnter}
              onChange={this.onChangeState}
              placeholder={name}
              type="search"
              className="search"
            />
          </StatesContainer>
        </div>
        <Categories categories={categories} />
      </div>
    )
  }

  renderSpinner = () => (
    <div className="spinner-container">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  render() {
    const {statesList, currentApiStatus} = this.state
    console.log(statesList)

    switch (currentApiStatus) {
      case apiStatus.success:
        return this.renderState()
      case apiStatus.failure:
        return null
      case apiStatus.inProgress:
        return this.renderSpinner()
      default:
        return null
    }
  }
}

export default StatesMain
