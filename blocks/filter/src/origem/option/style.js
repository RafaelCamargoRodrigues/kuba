import styled from '@kuba/styled'

export default styled.style`
  .option {
    align-items: center;
    border: var(--border-width-hairline) solid var(--color-master-light);
    border-radius: var(--border-radius-sm);
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-xs);
    padding: var(--spacing_inset-xs);
  }

  .option[selected] {
    border: var(--border-width-hairline) solid var(--color-primary);
  }
`