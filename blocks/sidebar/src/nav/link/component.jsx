import h from '@kuba/h'
import * as f from '@kuba/f'
import icon from '@kuba/icon'
import link from '@kuba/link'
import { urlFor } from '@kuba/router'
import style from './style'

export default (props, index) =>
  <link.Master uid={index} className={style.link} href={urlFor(props.page)} lightest>
    {props.text}
    {icon[props.icon]({ className: style.link__icon, small: f.T(), onColor: f.T() })}
  </link.Master>