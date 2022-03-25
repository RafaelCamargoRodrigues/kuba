import * as f from '@kuba/f'
import { paint, repaint } from '@kuba/h'
import component from './component'
import effect from './effect'
import setData from './setData'

@paint(component)
@effect
class Nose {
  #pristine
  #valor

  get pristine () {
    return this.#pristine ??= f.T()
  }

  get valor () {
    return this.#valor
  }

  @repaint
  [effect.onChange] (valor) {
    this.#pristine = f.F()
    this.#valor = valor
    setData(valor)
    return this
  }
}

export default Nose