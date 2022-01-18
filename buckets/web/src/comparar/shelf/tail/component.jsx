import h, { Fragment } from '@kuba/h'
import Hide from '@kuba/hide'
import Show from '@kuba/show'
import text from '@kuba/text'
import style from './style'

export default (tail) =>
  <text.Strong className={style.tail} master darker xs medium>
    <Show when={tail.valor}>
      Tail<br />
      <text.Span master xxxs>Sim</text.Span>
    </Show>
    <Hide when={tail.valor}>
      -<br />
      <text.Span master light xxxs>Não</text.Span>
    </Hide>
  </text.Strong>
