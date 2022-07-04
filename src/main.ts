import kaboom, { LevelConf } from '../dist/kaboom'
import './styles/style.css'

const k = kaboom({
  clearColor: [255, 255, 255]
})
const { scene, add, text, color, pos, start } = k

scene('main', () => {
  add([
    text('Hello world', 32),
    color(255, 255, 255),
    pos(320 / 2, 240 / 2)
  ])
})

start('main')