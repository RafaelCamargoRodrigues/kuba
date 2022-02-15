import h from '@kuba/h'
import tag from '@kuba/tag'
import style from './style'

export default (origem) =>
  <tag.Master className={style.origem} onClick={() => origem.open()} darker medium>Origem</tag.Master>