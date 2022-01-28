import { paint, repaint } from '@kuba/h'
import echo from '@kuba/echo'
import component from './component'
import effect from './effect'

@paint(component)
@effect
class Picture {
  #alt
  #src

  get alt () {
    return this.#alt
  }

  get src () {
    return this.#src
  }

  @repaint
  changeValor (alt, src) {
    this.#alt = alt
    this.#src = src
  }

  zoom () {
    echo.emit('zoom:open', { src: this.src, alt: this.alt })
    return this
  }
}

export default Picture