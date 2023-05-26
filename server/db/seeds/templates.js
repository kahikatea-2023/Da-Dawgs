exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('templates').del()
  return await knex('templates').insert([
    {
      name: 'default',
      mainColour: 6,
      accentColour: 2,
      backgroundColour: 8,
      fontColour: 9
    },
  ])
}
