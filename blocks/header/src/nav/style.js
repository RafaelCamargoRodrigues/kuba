import styled from '@kuba/styled'

export default styled.style`
  .nav {
    align-items: center;
    background-color: var(--color-master-lightest);
    display: none;
    flex-direction: column;
    gap: var(--spacing_inset-lg);
    height: calc(100vh - 89px);
    left: 0;
    padding: var(--spacing_inset-lg) var(--spacing_inset-xs);
    position: absolute;
    top: 89px;
    width: 100%;
    z-index: 1;
  }

  .nav[opened] {
    display: flex;
  }

  @media (min-width: 648px) {
    .nav {
      background-color: transparent;
      display: flex;
      flex-direction: row;
      gap: var(--spacing_inset-md);
      height: auto;
      left: auto;
      padding: 0;
      position: relative;
      top: auto;
      width: auto;
    }
  }

  .nav__link {
    font-size: var(--font-size-xs) !important;
  }

  @media (min-width: 648px) {
    .nav__link {
      font-size: var(--font-size-xxs) !important;
    }
  }

  @media (min-width: 648px) {
    .nav__button {
      display: none !important;
    }
  }
`
