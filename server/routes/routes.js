const express = require('express')

const db = require('../db/db')

const router = express.Router()

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
