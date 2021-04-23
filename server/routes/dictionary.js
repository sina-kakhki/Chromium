const express = require('express')
const request = require('superagent')

const Router = express.Router()

module.exports = Router

Router.get('/:word', (req, res) => {
  const word = req.params.word
  // request.get(`https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/${word}?strictMatch=false`)
  //   .set('Accept', 'application/json')
  //   .set('app_id', 'some id')
  //   .set('app_key', 'some key')
  //   .then(result => {
  //     res.status(200).json(result)
  //   })
  //   .catch(err => {
  //     res.status(500).send(err.message)
  //   })

  res.json({ word })
})
