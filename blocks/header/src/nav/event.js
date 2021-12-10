import { dataLayer } from '@kuba/gtm'
import { after, before } from '@kuba/middleware'

const redirect = before(function (page) {
  dataLayer.push({
    event: 'header',
    header_redirect: page
  })
  return [page]
})

const toggle = after(function (output) {
  dataLayer.push({
    event: 'header',
    header_toggle: this.opened ? 'open' : 'close'
  })
  return output
})

export default {
  redirect,
  toggle
}
