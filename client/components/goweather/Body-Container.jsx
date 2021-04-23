import React, { Component } from 'react'
import Context from './context/Context'
import CityNameInput from './CityNameInput'
import WeatherData from './WeatherData'
import request from 'superagent'

export default class BodyContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      cityName: '',
      forecastObject: { forecast: [] },
      open: false
    }

    this.onCityNameChange = this.onCityNameChange.bind(this)
    this.onCitySubmit = this.onCitySubmit.bind(this)
    this.togglePanel = this.togglePanel.bind(this)
  }

  onCityNameChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onCitySubmit () {
    const cityName = this.state.cityName
    const baseUrl = 'https://goweather.herokuapp.com/weather/' + cityName

    request.get(baseUrl).then(response => {
      this.setState({ forecastObject: response.body })
    })
  }

  togglePanel (e) {
    this.setState({ open: !this.state.open })
  }

  render () {
    const currentCityName = this.onCityNameChange
    const citySubmit = this.onCitySubmit
    const { cityName, forecastObject } = this.state

    return (
      <div className="main-container">
        <Context.Provider
          value={{
            currentCityName,
            citySubmit,
            cityName,
            forecastObject
          }}
        >
          <CityNameInput />
          {forecastObject.forecast.length !== 0 ? <WeatherData /> : null}
        </Context.Provider>
      </div>
    )
  }
}
