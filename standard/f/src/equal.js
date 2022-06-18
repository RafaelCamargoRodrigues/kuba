import arity from './arity'
import curry from './curry'
import dunder from './dunder'
import reduce from './reduce'

const evaluate = dunder('equal')

const equal = (x, ...args) => (
  reduce(args, (a, b) => evaluate(a) === evaluate(b), evaluate(x))
)

export default curry(arity(2, equal))
