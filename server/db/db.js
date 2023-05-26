const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getColours,
}

// async function getColours(db = connection) {
//   return await db('colours')
//     .join('templates as t1', 't1.mainColour', 'colours.id')
//     .join('templates as t2', 't2.accentColour', 'colours.id')
//     .join('templates as t3', 't3.backgroundColour', 'colours.id')
//     .join('templates as t4', 't4.fontColour', 'colours.id')
//     .select(
//       'colours.id as colourId',
//       'colours.colourHex',
//       't1.mainColour',
//       't2.accentColour',
//       't3.backgroundColour',
//       't4.fontColour'
//     )
// }

async function getColours(db = connection) {
  return await db('templates')
    .join('colours as c1', 'c1.id', 'templates.mainColour')
    .join('colours as c2', 'c2.id', 'templates.accentColour')
    .join('colours as c3', 'c3.id', 'templates.backgroundColour')
    .join('colours as c4', 'c4.id', 'templates.fontColour')
    .select(
      'c1.colourName as mainColourName',
      'c1.colourHex as mainColorHex',
      'c2.colourName as accentColourName',
      'c2.colourHex as accentColourHex',
      'c3.colourName as backgroundColourName',
      'c3.colourHex as backgroundColourHex',
      'c4.colourName as fontColourName',
      'c4.colourHex as fontColourHex'
    )
}
