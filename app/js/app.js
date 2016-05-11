function intRand(min, max) {
  return Math.floor((Math.random() * max) + min)
}

const canvas = document.getElementById('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

const context = canvas.getContext('2d')

const radius = canvas.width / 10
const x = intRand(radius, canvas.width - radius * 2)
const y = intRand(radius, canvas.height - radius * 2)

context.beginPath()
context.arc(x, y, radius, 0, 2 * Math.PI, false)
context.fillStyle = 'rgba(63, 100, 175, 0.25)'
context.fill()


//
// Filter //
//
const buttonFilterAll = document.querySelectorAll('[data-filter="*"]')[0]
const buttonFilterDj = document.querySelectorAll('[data-filter="dj"]')[0]
const buttonFilterLive = document.querySelectorAll('[data-filter="live"]')[0]

buttonFilterAll.onclick = () => {
  buttonFilterAll.className = 'selected'
  buttonFilterDj.className = ''
  buttonFilterLive.className = ''

  // Show the lives
  const lives = document.querySelectorAll('[data-category="live"]')
  for (let i = 0; i < lives.length; ++i) {
    lives[i].style.display = 'table-row'
  }

  // Show the DJs
  const djs = document.querySelectorAll('[data-category="dj"]')
  for (let i = 0; i < djs.length; ++i) {
    djs[i].style.display = 'table-row'
  }
}

buttonFilterDj.onclick = () => {
  buttonFilterAll.className = ''
  buttonFilterDj.className = 'selected'
  buttonFilterLive.className = ''

  // Hide the lives
  const lives = document.querySelectorAll('[data-category="live"]')
  for (let i = 0; i < lives.length; ++i) {
    lives[i].style.display = 'none'
  }

  // Show the DJs
  const djs = document.querySelectorAll('[data-category="dj"]')
  for (let i = 0; i < djs.length; ++i) {
    djs[i].style.display = 'table-row'
  }
}

buttonFilterLive.onclick = () => {
  buttonFilterAll.className = ''
  buttonFilterDj.className = ''
  buttonFilterLive.className = 'selected'

  // Show the lives
  const lives = document.querySelectorAll('[data-category="live"]')
  for (let i = 0; i < lives.length; ++i) {
    lives[i].style.display = 'table-row'
  }

  // Hide the DJs
  const djs = document.querySelectorAll('[data-category="dj"]')
  for (let i = 0; i < djs.length; ++i) {
    djs[i].style.display = 'none'
  }
}
