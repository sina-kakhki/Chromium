import React, { useContext } from 'react'
import Context from './context/Context'
import DateElement from './DateElement'

export default function WeatherData () {
  const { forecastObject, cityName } = useContext(Context)
  const today = new Date()
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]
  const month = monthNames[today.getMonth()]

  return (
    <div className="cityName" >
      <h1>{cityName}</h1>
      <h2>{today.getDate() + ', ' + month}</h2>
      <div className="form-group">
        <label><b>Description: </b></label>{forecastObject.description}
      </div>
      <div className="form-group">
        <label><b>Temperature: </b></label>{forecastObject.temperature}
      </div>
      <div className="form-group">
        <label><b>Wind: </b></label>{forecastObject.wind}
      </div>
      {
        forecastObject.forecast.map((elem, index) =>
          <DateElement key={index}
            month={month}
            date={today.getDate() + 1 + index}
            temperature={elem.temperature}
            wind={elem.wind}
          />
        )
      }
    </div >
  )
}
