import h from '@kuba/h'
import Bubble from '@kuba/bubble'
import text from '@kuba/text'
import style from './style'

export default (props) =>
  <Bubble className={style.navigation__bubble} alt={props.title} onClick={() => location.assign(props.url)}>
    <source srcSet={props.thumbnail} slot='sources' />
    <text.Strong className={style.navigation__strong} slot='caption' master darker small bold>{props.title}</text.Strong>
  </Bubble>
