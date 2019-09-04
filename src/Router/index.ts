import { 
  Get,
  Set,
  Remove,
  Redirect,
  Includes
 } from './types'

export interface Methods {

  getParam: Get
  setParam: Set
  removeParam: Remove

  getQuery: Get
  setQuery: Set
  removeQuery: Remove

  redirect: Redirect
  routeIncludes: Includes

}

export class Router {
  _methods: Methods

  constructor (methods: Methods) {
    this._methods = methods
  }

  getParam = (param: string) => { 
    return this._methods.getParam(param)
  }

  setParam = (param: string, value: string) => {
    this._methods.setParam(param, value)
  }

  removeParam = (param: string) => {
    this._methods.removeParam(param)
  }

  getQuery = (query: string) => {  
    return this._methods.getQuery(query)
  }

  setQuery = (query: string, value: string) => {
    this._methods.setQuery(query, value)
  }

  removeQuery = (query: string) => {
    this._methods.removeQuery(query)
  }

  redirect = (route: string) => {
    this._methods.redirect(route)
  }

  routeIncludes = (route: string) => {
    return this._methods.routeIncludes(route)
  } 
}