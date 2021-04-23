import React from 'react'
import Dictionary from './dictionary/Dictionary'
import Holiday from './holidays/Holiday'
import { NAVIGATE, navigateAction } from '../actions/navigation'
import { connect } from 'react-redux'
import Weather from './goweather/Body-Container'
import Jokes from './memeGenerator/Joke'

const Content = ({ url }) => {
  function switchD() {
    switch (url.toLowerCase()) {
      case 'dictionary':
        return <Dictionary />
      case 'planmyholiday':
        return <Holiday />
      case 'jokes':
        return <Jokes />
      case 'weather':
        return <Weather />
      default:
        return 'that site is not real!'
    }
  }
  return (
    <>
      {switchD()}
    </>
  )
}

function mapStateToProps(state) {
  return {
    url: state.navigate
  }
}
export default connect(mapStateToProps)(Content)
