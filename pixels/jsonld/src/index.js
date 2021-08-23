import * as f from '@kuba/f'
import middleware from '@kuba/middleware'
import graph from './graph'
import render from './render'

export default (structured) =>
  middleware(f.once((target) => render(f.push(graph, structured(target)))))
