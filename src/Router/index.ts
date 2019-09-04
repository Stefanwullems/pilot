import { 
  Get,
  Set,
  Remove,
  Includes,
  RedirectFn
} from './types'

export interface Methods<Redirect extends RedirectFn> {

  getParam: Get
  setParam: Set<Redirect>
  removeParam: Remove<Redirect>

  getQuery: Get
  setQuery: Set<Redirect>
  removeQuery: Remove<Redirect>

  redirect: Redirect
  routeIncludes: Includes

}

export class Router<Redirect extends RedirectFn> {
  _methods: Methods<Redirect>
  _redirect: Redirect

  constructor (methods: Methods<Redirect>, redirect: Redirect) {
    this._methods = methods
    this._redirect = redirect
  }

  getParam = (param: string) => { 
    return this._methods.getParam(param)
  }

  setParam = (param: string, value: string) => {
    this._redirect(...this._methods.setParam(param, value))
  }

  removeParam = (param: string) => {
    this._redirect(...this._methods.removeParam(param))
  }

  getQuery = (query: string) => {  
    return this._methods.getQuery(query)
  }

  setQuery = (query: string, value: string) => {
    this._redirect(this._methods.setQuery(query, value))
  }

  removeQuery = (query: string) => {
    this._redirect(this._methods.removeQuery(query))
  }

  routeIncludes = (route: string) => {
    return this._methods.routeIncludes(route)
  } 
}