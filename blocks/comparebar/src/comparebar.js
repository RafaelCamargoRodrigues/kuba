import { paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import component from './component'
import scroll from './scroll'
import actions from './actions'

@paint(component)
@actions
class Comparebar {
  #opened

  get opened () {
    return this.#opened ??= f.F()
  }

  add () {
    this.open()
    return this
  }

  @repaint
  @scroll.unlock
  close () {
    this.#opened = f.F()
    return this
  }

  @repaint
  @scroll.lock
  open () {
    this.#opened = f.T()
    return this
  }
}

export default Comparebar