import h from '@kuba/h'
import container from '@kuba/container'
import Logo from '@kuba/logo'
import text from '@kuba/text'
import schema from './schema.json'
import style from './style'

export default (footer) =>
  <footer className={style.footer}>
    <container.Div className={style.footer__container}>
      <Logo onClick={() => footer.redirectTo('shape')} symbol />
      <text.P className={style.footer__text} master dark xxxs>{schema.description}</text.P>
    </container.Div>
  </footer>
