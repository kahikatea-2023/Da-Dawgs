exports.up = (knex) => {
  return knex.schema.createTable('templates', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.integer('mainColour').references('colours.id')
    table.integer('accentColour').references('colours.id')
    table.integer('backgroundColour').references('colours.id')
    table.integer('fontColour').references('colours.id')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('templates')
}
