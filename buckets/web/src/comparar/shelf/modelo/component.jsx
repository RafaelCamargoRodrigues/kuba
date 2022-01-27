import h from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (modelo) =>
  <text.Strong className={style.modelo} master darker xs medium>{modelo.valor}</text.Strong>