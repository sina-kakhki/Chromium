const connection = require('./connection')

function getTodo(holidayId, db = connection) {
    return db('holiday').where('holiday', holidayId).select().first()
}

function storeTodo(data, db = connection) {
    return db('holiday').del().then(_ => {
        return db('holiday').insert(data)
    })
}

module.exports = {
    getTodo,
    storeTodo
}
