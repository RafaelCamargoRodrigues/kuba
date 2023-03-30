import './style'
import h from '@kuba/h'

function component (_props, children) {
  return (
    <footer className='footer'>
      {children}
    </footer>
  )
}

export default component
