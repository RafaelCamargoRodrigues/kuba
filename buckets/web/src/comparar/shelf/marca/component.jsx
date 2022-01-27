import h from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (marca) =>
  <text.Strong className={style.marca} master darker xxxs>{marca.nome}</text.Strong>