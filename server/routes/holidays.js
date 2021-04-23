const router = require('express').Router()
const request = require('superagent')
const { storeTodo, getTodo } = require('../db/holiday')

const END_POINT = 'https://holidayapi.com/v1/holidays'
const CODE = 'NZ'

router.get('/', (req, res) => {

    request.get(`${END_POINT}?year=${new Date(Date.now()).getFullYear() - 1}&country=${CODE}&key=${process.env.API_KEY}`).then(({ body }) => {
        res.json(body.holidays.filter(holiday => new Date(holiday.date).getDate() + 1 >= new Date(Date.now()).getDate() + 1))
    }).catch(err => {
        console.log(err.message)
        res.status(500).send('Error')
    })
})





router.post('/', (req, res) => {
    const data = req.body
    storeTodo(data).then(res => {
        res.send()
    }).catch(err => {
        res.status(500).send()
    })
})

router.post('/todo', (req, res) => {
    const { id } = req.body

    getTodo(id).then(items => {
        res.json(items)
    }).catch(err => {
        console.log(err)
    })
})

module.exports = router