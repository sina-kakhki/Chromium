const express = require('express')
const request = require('superagent')

const router = express.Router()

router.get('/', (req, res) => {
    return request.get('https://official-joke-api.appspot.com/jokes/programming/random')
        .then(joke => {
            console.log(joke)
            res.json(JSON.parse(joke.text))
        }, [])
})

module.exports = router
