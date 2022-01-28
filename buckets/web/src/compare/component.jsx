import h from '@kuba/h'
import container from '@kuba/container'
import text from '@kuba/text'
import View from '@kuba/view'
import Descricao from './descricao'
import Modelo from './modelo'
import style from './style'
import Tamanho from './tamanho'
import Thumbnail from './thumbnail'
import Wheelbase from './wheelbase'

export default () =>
  <View>
    <container.Div className={style.compare__div} slot='main'>
      <Modelo master />
      <Modelo />
      <Thumbnail master />
      <Thumbnail />
      <Descricao master />
      <Descricao />
      <hgroup className={style.compare__hgroup}>
        <text.H2 className={style.compare__h2} master darker xs bold>Tamanho</text.H2>
        <text.P className={style.compare__p} master xxxs>Medida em polegadas do comprimento de desenvolvido do shape</text.P>
      </hgroup>
      <Tamanho master />
      <Tamanho />
      <hgroup className={style.compare__hgroup}>
        <text.H2 className={style.compare__h2} master darker xs bold>Wheelbase</text.H2>
        <text.P className={style.compare__p} master xxxs>Menor distância entre os trucks do shape</text.P>
      </hgroup>
      <Wheelbase master />
      <Wheelbase />
    </container.Div>
  </View>