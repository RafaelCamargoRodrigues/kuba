import h from '@kuba/h'
import router from '@kuba/router'
import render from './render'

router('/', async function home () {
  const { default: Home } = await import('@kuba/home' /* webpackChunkName: "home" */)
  render(<Home />)
})

router('/about', async function about () {
  const { default: About } = await import('@kuba/about' /* webpackChunkName: "about" */)
  render(<About />)
})
