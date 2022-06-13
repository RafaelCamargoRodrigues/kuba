import { isGap } from '@start/f/src/gap'

export default (func) =>
  function callback (a) {
    if (arguments.length === 0 || isGap(a)) return callback
    return func(...arguments)
  }
