exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('colours').del()
  return await knex('colours').insert([
    { colourName: 'red', colourHex: 'f51d05' },
    { colourName: 'orange', colourHex: 'fa960a' },
    { colourName: 'yellow', colourHex: 'fbff00' },
    { colourName: 'green', colourHex: '2cfa02' },
    { colourName: 'blue', colourHex: '02c0fa' },
    { colourName: 'navy', colourHex: '0e316e' },
    { colourName: 'purple', colourHex: 'c35ff5' },
    { colourName: 'white', colourHex: 'ffffff' },
    { colourName: 'black', colourHex: '000000' },
    { colourName: 'grey', colourHex: 'a3a2a3' },
  ])
}
