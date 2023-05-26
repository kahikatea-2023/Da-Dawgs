const e = require('express')
const db = require('../db/db')

console.log('hi')

const mainColourSelect = document.getElementById('mainColourSelect')
const accentColourSelect = document.getElementById('accentColourSelect')
const bgColourSelect = document.getElementById('bgColourSelect')
const fontColourSelect = document.getElementById('fontColourSelect')

mainColourSelect.addEventListener('change', changeColour('main'))
accentColourSelect.addEventListener('change', changeColour('accent'))
bgColourSelect.addEventListener('change', changeColour('bg'))
fontColourSelect.addEventListener('change', changeColour('font'))

document.getElementsByTagName('select')

function changeColour(option) {
  const colour = this.value
  console.log('Got a colour')
  const target = document.getElementsByClassName(option)
  target.map((element) => {
    if (option === 'font') {
      element.style.color = db.getColourValueById(colour)
    } else {
      element.style.backgroundColor = db.getColourValueById(colour)
    }
  })
}

module.exports = { changeColour }
