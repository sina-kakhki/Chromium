import React, { useState } from 'react'
import { connect } from 'react-redux'
import { setDictionary } from './dictioaryHelper'

const Dictionary = ({ word, dispatch }) => {

  const [audio, setAudio] = useState(null)

  const [wordInput, setWordInput] = useState('')

  function handleOnChange(evt) {
    const { name, value } = evt.target
    setWordInput(value)
  }

  function handleInput() {
    setDictionary(dispatch, wordInput)
  }

  function handleClick() {
    const audio = new Audio(word.audio)
    audio.play()
  }

  return (
    <>
      <h1>The totally not Oxford Dictionary</h1>
      <input type="text" onChange={handleOnChange} value={wordInput} name="wordInput" id="word" placeholder="Enter a word..." />
      <button onClick={handleInput}>GO LEARN</button>
      <div>
        <h1>{word.word}</h1>
        {word.audio && <button onClick={handleClick}>&#x1F50A;</button>}
        {word.definitions?.map((def, i) => {
          return <div key={i}>
            <h3>{i}.</h3>
            <p>{def.def}</p>
            <ul>
              <li>{def.example}</li>
            </ul>
          </div>
        })}
      </div>
    </>
  )
}

function mapStateToProps(state) {
  return {
    word: state.word
  }
}

export default connect(mapStateToProps)(Dictionary)