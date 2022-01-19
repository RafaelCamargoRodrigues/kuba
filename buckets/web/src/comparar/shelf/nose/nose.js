import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Nose {
  #valor

  get valor () {
    return this.#valor
      ? 'Sim'
      : 'Nã0'
  }

  constructor (valor) {
    this.#valor = valor
  }

  static create (data) {
    return new Nose(data.nose)
  }
}

export default Nose
