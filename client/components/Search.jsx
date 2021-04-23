import React from 'react'
import { navigateAction } from '../actions/navigation'
import { connect } from 'react-redux'

const Search = ({ dispatch }) => {

  function handleSubmit(evt) {
    evt.preventDefault()
    const url = evt.target.urlField.value.split('.')[0]
    dispatch(navigateAction(url))
  }
  return (
    <>
      <form className="font-mono space-x-4" onSubmit={handleSubmit}>
        <label >
          <input className="w-96 border border-gray-400" type="text" name="urlField" placeholder="Search Google or enter a URL" />
        </label>
        <input className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" type="submit" value="Go!" />
      </form>
    </>
  )
}

export default connect()(Search)
