import h, { Fragment } from '@kuba/h'
import Hide from '@kuba/hide'
import icon from '@kuba/icon'
import Show from '@kuba/show'
import style from './style'
import text from '@kuba/text'

export default (tail) =>
  <section className={style.tail}>
    <text.Data className={style.tail__data} master darker sm bold>
      <Show when={tail.master}><icon.Check /></Show>
      <Hide when={tail.master}>-</Hide>
    </text.Data>
    <dl className={style.tail__dl}>
      <text.Dt className={style.tail__text} master darker xxs medium>Tail</text.Dt>
      <text.Dd className={style.tail__text} master xxxs>Parte traseira inclinada do shape</text.Dd>
    </dl>
    <text.Data className={style.tail__data} master darker sm bold>
      <Show when={tail.slave}><icon.Check /></Show>
      <Hide when={tail.slave}>-</Hide>
    </text.Data>
  </section>
