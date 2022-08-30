import * as f from '@kuba/f'
import { actions, data, storage, merge } from '../home'
import { didMount, paint } from '@kuba/h'
import { setDescription, setTitle } from '@kuba/markup'
import { setGlobal } from '@kuba/global'
import component from './component'
import jsonld from '@kuba/jsonld'

@paint(component)
@jsonld(data)
@storage
@actions
class Shapes {
  #filter = { pro: true }
  #page

  get description () {
    return 'Escolha o melhor shape para o seu setup'
  }

  get title () {
    return 'Pro Model'
  }

  @didMount
  [f.dunder.mount] () {
    setTitle(this.title)
    setDescription(this.description)
    return this
  }

  @storage.pull
  [actions.onMore] () {
    this.#page = f.inc(this.page)
    return this
  }

  [f.dunder.page] () {
    return this.#page ?? 1
  }

  [storage.filter] () {
    return this.#filter ?? {}
  }

  [storage.onError] () {
    return this
  }

  [storage.onResponse] (shapes) {
    setGlobal({
      page: this.page,
      shapes: merge(shapes, this)
    })
    return this
  }
}

export default Shapes
