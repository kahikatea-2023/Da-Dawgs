exports.up = (knex) => {
  return knex.schema.createTable('colours', (table) => {
    table.increments('id').primary()
    table.string('colourName')
    table.string('colourHex')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('colours')
}
