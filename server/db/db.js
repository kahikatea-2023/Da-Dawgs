const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

async function getColours(db = connection) {
  return await db('colours').select()
}

async function getColoursForTemplates(db = connection) {
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

async function getColourValueById(id) {
  return await getColours().where('id', id).select('colours.colourHex')
}

module.exports = {
  getColours,
  getColoursForTemplates,
  getColourValueById,
}
