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
