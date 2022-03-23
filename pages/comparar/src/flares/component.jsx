import h, { Fragment } from '@kuba/h'
import Hide from '@kuba/hide'
import icon from '@kuba/icon'
import Show from '@kuba/show'
import style from './style'
import text from '@kuba/text'

export default (flares) =>
  <section className={style.flares}>
    <text.Data className={style.flares__data} master darker sm bold>
      <Show when={flares.master}><icon.Check /></Show>
      <Hide when={flares.master}>-</Hide>
    </text.Data>
    <dl className={style.flares__dl}>
      <text.Dt className={style.flares__text} master darker xxs medium>Wheel Flares</text.Dt>
      <text.Dd className={style.flares__text} master xxxs>Onda no shape acima da roda para evitar que encostem</text.Dd>
    </dl>
    <text.Data className={style.flares__data} master darker sm bold>
      <Show when={flares.slave}><icon.Check /></Show>
      <Hide when={flares.slave}>-</Hide>
    </text.Data>
  </section>
