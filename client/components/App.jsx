import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Dictionary from './Dictionary'

function App(props) {

  return (
    <>
      <div className='app'>
        <Dictionary />
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
