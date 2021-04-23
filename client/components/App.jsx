import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Dictionary from './dictionary/Dictionary'
import Browser from './Browser'
function App(props) {

  return (
    <>
      <div className='app'>

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
