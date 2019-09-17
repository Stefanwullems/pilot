import { RouteCrud } from './RouteCrud'
import { RedirectFn, RouterOptions } from './types'

export class Router<Redirect extends RedirectFn, Opts extends RouterOptions<Redirect, RouteCrud<Redirect>, RouteCrud<Redirect>>> {
  _methods: Opts['methods']
  _redirect: Redirect

  params: Opts['params']
  query: Opts['query']

  constructor (redirect: Redirect, options: Opts) {
    this._methods = options.methods
    this._redirect = redirect

    this.params = options.params
    this.query = options.query
  }

  getRoute = () => {
    return this._methods.getRoute()
  } 

  setRoute = (route: string) => {
    this._redirect(this._methods.setRoute(route))
  }
}