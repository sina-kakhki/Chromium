import React from 'react'

const Dictionary = (props) => {

  return (
    <>
      <input type="text" name="input" id="word" placeholder="Enter word..." />
      <button>GO</button>
      <div>
        <h1>Word</h1>
        <button>Play Sound</button>
        <h2>Definition:</h2>
        <p>Word definition</p>
      </div>
    </>
  )
}

export default Dictionary