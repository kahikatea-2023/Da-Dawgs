const mainColourSelect = document.getElementById('mainColourSelect')
const accentColourSelect = document.getElementById('accentColourSelect')
const bgColourSelect = document.getElementById('bgColourSelect')
const fontColourSelect = document.getElementById('fontColourSelect')

mainColourSelect.addEventListener('change', changeColour)
accentColourSelect.addEventListener('change', changeColour)
bgColourSelect.addEventListener('change', changeColour)
fontColourSelect.addEventListener('change', changeColour)

document.getElementsByTagName('select')

function changeColour(event) {
  const select = event.target
  const name = select.name
  console.log(select)
  const option = select.selectedIndex
  const colour = select[option].style.backgroundColor
  console.log(colour)
  let target
  if (name === 'bgColour') {
    console.log('want to change bg')
    document.getElementsByClassName('playground')[0].style.backgroundColor =
      colour
  }
  if (name === 'fontColour') {
    target = document.getElementsByTagName('p')
  } else {
    target = document.getElementsByClassName(name)
  }
  console.log(`name of selector: `, name)
  for (let i = 0; i < target.length; i++) {
    const element = target[i]
    if (name === 'fontColour') {
      console.log('fontColour')
      element.style.color = colour
    } else {
      console.log('fillColour changed')
      element.style.backgroundColor = colour
    }
  }
}

module.exports = { changeColour }
