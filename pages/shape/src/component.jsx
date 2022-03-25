import Breadcrumb from './breadcrumb'
import Descricao from './descricao'
import Especificacao from './especificacao'
import h, { Fragment } from '@kuba/h'
import Hero from './hero'
import Material from './material'
import Modelo from './modelo'
import Relacionado from './relacionado'
import Site from '@kuba/site'
import style from './style'
import Variacao from './variacao'

export default () =>
  <Site className={style.shape__main}>
    <Breadcrumb />
    <Fragment slot='main'>
      <Modelo />
      <Hero />
      <Descricao />
      <Variacao />
      <Especificacao />
      <Material />
      <Relacionado />
    </Fragment>
  </Site>