import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Dictionary from './dictionary/Dictionary'

function App (props) {
  return (
    <>
      <div className='app'>

        <ul>
          {props.fruits.map(fruit => (
            <li key={fruit}>{fruit}</li>
          ))}
        </ul>
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
