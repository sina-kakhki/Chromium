import React from 'react'
import Dictionary from './dictionary/Dictionary'
import { NAVIGATE, navigateAction } from '../actions/navigation'
import { connect } from 'react-redux'

const Content = ({ url }) => {

  function switchD() {
    switch (url.toLowerCase()) {
      case 'dictionary':
        return <Dictionary />
      default:
        return "that site is not real!"
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
