import h, { Fragment } from '@kuba/h'
import style from './style'
import text from '@kuba/text'

export default (tamanho) =>
  <section className={style.tamanho}>
    <text.Data className={style.tamanho__data} master darker xs bold>{tamanho.master}</text.Data>
    <dl className={style.tamanho__dl}>
      <text.Dt className={style.tamanho__text} master darker xxs medium>Tamanho</text.Dt>
      <text.Dd className={style.tamanho__text} master xxxs>Medida do comprimento de desenvolvido do shape</text.Dd>
    </dl>
    <text.Data className={style.tamanho__data} master darker xs bold>{tamanho.slave}</text.Data>
  </section>
