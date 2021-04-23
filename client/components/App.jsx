import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import BodyContainer from './goweather/Body-Container'

function App () {
  return (
    <>
      <div className='app'>
       <BodyContainer />
      </div>
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    fruits: globalState.fruits
  }
}

export default connect(mapStateToProps)(App)
