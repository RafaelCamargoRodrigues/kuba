import * as f from '@kuba/f'
import echo from '@kuba/echo'
import media from '@kuba/media'
import { after } from '@kuba/middleware'

var mobile = f.T()

const lock = after(function (output) {
  mobile && echo.emit('overlayer:open')
  return output
})

const unlock = after(function (output) {
  mobile && echo.emit('overlayer:close')
  return output
})

media('(min-width: 769px)')
  .in(() => mobile = f.F())
  .out(() => mobile = f.T())

export default {
  lock,
  unlock
}
