import arity from './arity'
import curry from './curry'

const toString = (value, radix) =>
  value.toString(radix)

export default curry(arity(1, toString))