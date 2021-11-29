import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Header {
  get name () {
    return 'header'
  }
}

export default Header
