import { push } from '@kuba/jsonld'

export default (value) =>
  value && (
    push({
      '@id': '#additionalproperty',
      '@type': 'PropertyValue',
      name: 'Concave',
      value: 'Sim'
    })
  )