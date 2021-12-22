import { paint } from '@kuba/h'
import { urlFor } from '@kuba/router'
import component from './component'
import event from './event'

@paint(component)
class Footer {
  @event.redirect
  redirectTo (page) {
    location.assign(urlFor(page))
    return this
  }
}

export default Footer
