import * as settings from '@kuba/settings'

export default () =>
  fetch(`${settings.api.url}/blocks/workflow`)
    .then(response => response.json())
