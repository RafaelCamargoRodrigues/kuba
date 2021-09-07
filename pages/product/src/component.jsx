import h, { Fragment } from '@kuba/h'
import Filter from '@kuba/filter'
import Site from '@kuba/site'
import Title from '@kuba/title'
import Breadcrumb from './breadcrumb'
import style from './style'

export default (category) =>
  <Site className={style.category}>
    <Fragment slot='hot'>
      <Title className={style.category__title}>{category.title}</Title>
      <Breadcrumb className={style.category__breadcrumb} />
      <Filter className={style.category__filter} />
    </Fragment>
  </Site>