import { paint } from '@kuba/h'
import { redirectTo } from '@kuba/router'
import { setDescription, setTitle } from '@kuba/markup'
import { setGlobal } from '@kuba/global'
import component from './component'
import events from './events'
import setData from './setData'
import storage from './storage'

@paint(component)
@storage
class Marca {
  [storage.onError] () {
    redirectTo('marcas')
    return this
  }

  @events.onView
  [storage.onResponse] (marca) {
    setTitle(marca.nome)
    setDescription(marca.descricao)
    setGlobal({ marca })
    setData(marca)
    return this
  }
}

export default Marca