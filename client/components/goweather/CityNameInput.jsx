import React, { useContext } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Context from './context/Context'

export default function ItemInput () {
  const { currentCityName, citySubmit } = useContext(Context)

  return (
    <form className="cityName" autoComplete="off">
      <h1>Please enter your city name:</h1>
      <div className="form-group">
        <TextField onChange={currentCityName} id="standard-basic" label="Enter City" name='cityName' />
      </div>
      <div className="form-group">
        <Button onClick={citySubmit} className="cityNameButton" variant="contained" color="primary">
					Get Weather Broadcast
        </Button>
      </div>
    </form >
  )
}
