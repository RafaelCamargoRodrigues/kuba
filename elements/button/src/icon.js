import h from '@kuba/h'
import * as f from '@kuba/f'
import styled from '@kuba/styled'
import icon from '@kuba/icon'

const style = styled.style`
  .button {
    align-items: center;
    background-color: transparent;
    border: none;
    border-radius: var(--border-radius-circular);
    cursor: pointer;
    display: inline-flex;
    height: 48px;
    justify-content: center;
    user-select: none;
    width: 48px;
  }

  .button:hover {
    background-color: var(--color-master-lighter);
  }
`

const button = () =>
  new Proxy({}, {
    get: (_, name) =>
      (props) =>
        h('button', { className: [style.button, props.className], onClick: props.onClick }, icon[name]({ ...props, className: undefined }))
  })

f.assign(button, {
  is: f.equal('icon')
})

export default button
