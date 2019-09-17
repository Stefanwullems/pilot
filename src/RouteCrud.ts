import { RedirectFn, RouteCrudMethods } from './types'

export class RouteCrud<Redirect extends RedirectFn> {
  _redirect: Redirect
  _methods: RouteCrudMethods<Redirect>

  constructor(redirect: Redirect, methods: RouteCrudMethods<Redirect>) {
    this._redirect = redirect
    this._methods = methods
  }

  get = (name: string) => {
    return this._methods.get(name)
  }

  set = (name: string, value: string) => {
    this._redirect(this._methods.set(name, value))
  }

  clear = (name: string) => {
    this._redirect(this._methods.clear(name))
  }
}