const express = require('express')
const hbs = require('express-handlebars')
const db = require('../db/db')
const router = express.Router()
router.use(express.urlencoded({ extended: true }))

router.get('/', (req, res) => {
  res.render('home')
})

router.get('/builder', async (req, res) => {
  const colours = await db.getColours()
  // const template = await db.getDefaultTemplate()
  const template = {
    id: 1,
    name: 'default',
    mainColour: '0e316e',
    accentColour: 'fa960a',
    backgroundColour: 'ffffff',
    fontColour: '000000',
  }

  const viewData = { colours, template }
  // console.log('viewData: ', viewData)

  res.render('builder', viewData)
})

module.exports = router
