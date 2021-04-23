exports.up = function (knex) {
    return knex.schema.createTable('holiday', table => {
        table.increments('id')
        table.string('todo')
        table.string('holiday')
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('holiday')
}
