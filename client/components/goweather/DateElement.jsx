import React from 'react'

export default function DateElement (props) {
  return (
    <div className="cityName" >
      <h2>{props.date}, {props.month}</h2>
      <div className="form-group">
        <label><b>Temperature: </b></label>{props.temperature}
      </div>
      <div className="form-group">
        <label><b>Wind: </b></label>{props.wind}
      </div>
    </div >
  )
}
