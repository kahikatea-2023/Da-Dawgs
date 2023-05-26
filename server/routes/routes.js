const express = require('express')
const hbs = require('express-handlebars')
const db = require('../db/db')
const router = express.Router()
router.use(express.urlencoded({ extended: true }))

router.get('/', (req, res) => {
  res.render('home')
})

router.get('/builder', async (res, req) => {
  const templateData = await db.getColours()
  const viewData = templateData
  // console.log('viewData: ', viewData)

  res.render('builder', viewData)
})

module.exports = router
