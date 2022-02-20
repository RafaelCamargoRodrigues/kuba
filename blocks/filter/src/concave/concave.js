import { paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import echo from '@kuba/echo'
import component from './component'

@paint(component)
class Concave {
  #selected

  get selected () {
    return this.#selected ??= f.F()
  }

  @repaint
  toggle () {
    echo.emit('filter:change', {
      key: 'concave',
      value: this.#selected = f.not(this.selected)
    })
    return this
  }
}

export default Concave