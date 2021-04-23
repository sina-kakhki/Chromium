import React from 'react'
import Jokes from './memeGenerator/Joke'

function App() {
    return (
        <div style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightblue' }}>
            <h1 style={{ color: 'maroon' }}> Very Funny Jokes! </h1>
            <Jokes />
        </div>
    )
}

export default App