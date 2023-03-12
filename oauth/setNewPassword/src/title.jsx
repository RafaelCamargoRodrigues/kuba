import './style'
import { setTitle } from '../../../.prelude/pixel/title/src'
import h from '@kuba/h'
import text from '@kuba/text'

function component () {
  setTitle(component.title)
  return (
    <text.H1 className='setNewPassword__title' master dark md highlight bold>{component.title}</text.H1>
  )
}

Object.assign(component, {
  title: 'Set new password'
})

export default component