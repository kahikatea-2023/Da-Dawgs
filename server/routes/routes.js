const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/', (req, res) => {
  res.render('home')
})

router.get('/builder', async (res, req) => {
  // const templateData = await db.getColours()
  // const viewData = templateData
  const viewData = {
    id: 1,
    name: 'default',
    main: '0e316e',
    accent: 'fa960a',
    backgound: 'ffffff',
    font: '000000',
  }
  res.render('builder', viewData)
})

module.exports = router
