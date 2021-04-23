const express = require('express')
const request = require('superagent')

const Router = express.Router()

module.exports = Router

Router.get('/:word', (req, res) => {
  const word = req.params.word
  request.get(`https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/${word}?strictMatch=false`)
    .set('Accept', 'application/json')
    .set('app_id', '95971aa9')
    .set('app_key', '199adcc61eb7b5185896801bb6dfc327')
    .then(result => {
      res.status(200).json(result.body)
    })
    .catch(err => {
      res.status(404).send(`No entry found for ${word}`)
    })

})
