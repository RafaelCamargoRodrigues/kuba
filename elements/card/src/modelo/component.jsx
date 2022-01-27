import h from '@kuba/h'
import link from '@kuba/link'
import style from './style'

export default (modelo) =>
  <link.Master className={style.modelo} href={modelo.href} darker xxs medium>{modelo.valor}</link.Master>