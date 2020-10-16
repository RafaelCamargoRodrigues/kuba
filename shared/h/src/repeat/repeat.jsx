import h from '@rex/h/src/h'
import * as f from '@rex/f'
import Fragment from '@rex/h/src/fragment'

export default (props) =>
  <Fragment slot={props.slot}>
    {f.map(props.iterator, (attrs, i) => props.component(attrs, i))}
  </Fragment>
