import * as f from '@kuba/f'
import { blend, color, weight } from '@kuba/polished'
import styled from '@kuba/styled'

const button = styled.button`
  align-items: center;
  background-color: ${color};
  border: none;
  border-radius: var(--border-radius-sm);
  color: ${blend};
  cursor: pointer;
  display: inline-flex;
  font-family: var(--font-family-base);
  font-size: var(--font-size-xs);
  font-weight: ${weight};
  gap: var(--spacing_inset-nano);
  height: 48px;
  justify-content: center;
  letter-spacing: 0.618px;
  line-height: var(--line-height-xl);
  padding: 0 var(--spacing_inset-sm);
  user-select: none;
`

f.assign(button, {
  is: f.T
})

export default button
