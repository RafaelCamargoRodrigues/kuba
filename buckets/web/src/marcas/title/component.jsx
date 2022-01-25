import h from '@kuba/h'
import container from '@kuba/container'
import text from '@kuba/text'
import style from './style'

export default () =>
  <container.Section className={style.title}>
    <text.Span className={style.title__span} master xxxs darker medium>Está com dúvidas?</text.Span>
    <text.H1 className={style.title__h1} master darker md bold>Descubra novas marcas no kuba</text.H1>
  </container.Section>
