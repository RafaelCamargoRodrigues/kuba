import * as f from '@kuba/f'
import Children from './children'

class Fragment {
  #children
  #element
  #entity
  #slot

  get children () {
    return this.#children
  }

  get element () {
    return this.#element ??= document.createDocumentFragment()
  }

  get isNode () {
    return f.T()
  }

  get name () {
    return '#fragment'
  }

  get slot () {
    return this.#slot
  }

  get type () {
    return 11
  }

  constructor (props, children) {
    this.#children = Children.create(children, this)
    this.#slot = props.slot
  }

  append (...children) {
    this.element.append(...children)
    return this
  }

  appendChild (child) {
    this.insertAdjacentElement('afterend', child)
    return this
  }

  connectEntity (entity) {
    this.#entity = entity
    return this
  }

  didMount () {
    f.idle(() =>
      this.#entity?.[f.magic('didMount')]?.())()
    return this
  }

  didUpdate () {
    f.idle(() =>
      this.#entity?.[f.magic('didUpdate')]?.())()
    return this
  }

  insertAdjacentElement (position, element) {
    this.children.last.insertAdjacentElement(position, element)
    return this
  }

  paint () {
    this.willMount()
    this.children.paint()
    this.didMount()
    return this.element
  }

  reflow (fragment) {
    this.willUpdate()
    this.children.reflow(fragment.children)
    this.didUpdate()
    return this
  }

  replaceChild (current, child) {
    current.parentNode.replaceChild(child, current)
    return this
  }

  willMount () {
    this.#entity?.[f.magic('willMount')]?.()
    return this
  }

  willUpdate () {
    this.#entity?.[f.magic('willUpdate')]?.()
    return this
  }

  static execute (props, children) {
    return new Fragment(props, children)
  }
}

export default Fragment.execute
