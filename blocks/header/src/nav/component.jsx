import h, { Fragment } from '@kuba/h'
import button from '@kuba/button'
import Hide from '@kuba/hide'
import link from '@kuba/link'
import Show from '@kuba/show'
import style from './style'

export default (nav) =>
  <>
    <nav className={style.nav} opened:isTruthy={nav.opened}>
      <link.Master className={style.nav__link} onClick={() => nav.redirectTo('skateboard')} darker medium>skate</link.Master>
      <link.Master className={style.nav__link} onClick={() => nav.redirectTo('longboard')} darker medium>longboard</link.Master>
      <link.Master className={style.nav__link} onClick={() => nav.redirectTo('cruiser')} darker medium>cruiser</link.Master>
    </nav>
    <Hide when={nav.opened}>
      <button.icon.Bars className={style.nav__button} onClick={() => nav.open()} />
    </Hide>
    <Show when={nav.opened}>
      <button.icon.Close className={style.nav__button} onClick={() => nav.close()} />
    </Show>
  </>
