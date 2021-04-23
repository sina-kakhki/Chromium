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
    <div className="flex flex-col bg-white min-h-screen p-4">
      <div className="mx-auto flex items-center text-4xl font-bold rounded-sm">
        <img src="/images/icons/dictionary.png" className="h-20 w-20 rounded-full" alt="" />
        <h1 className="border-b-8 border-black rounded ">The totally not Oxford Dictionary</h1>
      </div>
      <div className="mx-auto">
        <input type="text" className="h-10 rounded shadow" onChange={handleOnChange} value={wordInput} name="wordInput" id="word" placeholder="Enter a word..." />
        <button onClick={handleInput} className="rounded-md shadow bg-gray-300 border-2 h-10 px-2 mx-1">GO LEARN</button>
      </div>
      <div className="m-10 ">
        <div className="m-2">
          <div className="flex">
            <h1 className="text-xl font-bold">{word.word}</h1>
            {word.audio && <button className="hover:bg-gray-200 w-6 rounded-full" onClick={handleClick}>&#x1F50A;</button>}
          </div>
          <div className="mt-4">
            {word.definitions?.map((def, i) => {
              return <div key={i} className="mb-4">
                <div className="flex">
                  <h3 className="font-bold text-xl mr-2">{i}</h3>
                  <p className="text-lg">{def.def}</p>
                </div>
                <ul className="pl-10 italic list-disc">
                  <li>{def.example}</li>
                </ul>
              </div>
            })}
          </div>

        </div>
      </div>
    </div >
  )
}

function mapStateToProps(state) {
  return {
    word: state.word
  }
}

export default connect(mapStateToProps)(Dictionary)