import React, { useEffect, useState } from 'react'
import request from 'superagent'

function Joke () {

  const [joke, setJoke] = useState(null)
  useEffect(()=>{
    request.get('/api/v1/joke')
    .then(res => {
      const joke = res.body[0]
      setJoke(joke)
    })
  }, [])
  return (
    <div style = {{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <div>
          <br/>
        </div>
        <div>
          {
            joke && <div>
          <h4>{joke.setup}</h4>
          <h4>{joke.punchline}</h4>
          </div>
          }
          <br/>
        </div>
    </div>
  )
}

export default Joke
