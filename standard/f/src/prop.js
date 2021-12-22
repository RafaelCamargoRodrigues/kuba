import curry from './curry'

const prop = (path, object) => {
  /* eslint no-new-func: "off" */
  try {
    return (new Function('x', `return x${/^\[/.test(path) ? '' : '.'}${path}`))(object)
  } catch {}
}

export default curry(prop)
