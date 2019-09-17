import { RouteCrud } from './RouteCrud'

export type RedirectFn = (...args: any[]) => void

type Get = (name: string) => string | null
type Set<Redirect extends RedirectFn> = (name: string, value: string) => ReturnType<Redirect>
type Clear<Redirect extends RedirectFn> = (name: string) => ReturnType<Redirect>

export interface RouteCrudMethods<Redirect extends RedirectFn> {
  get: Get
  set: Set<Redirect>
  clear: Clear<Redirect>
}

type GetRoute = () => string
type SetRoute<Redirect extends RedirectFn> = (route: string) => Parameters<Redirect>

export interface RouterMethods<Redirect extends RedirectFn>  {
  getRoute: GetRoute
  setRoute: SetRoute<Redirect>
}

export interface RouterOptions<
  Redirect extends RedirectFn,
  Params extends RouteCrud<RedirectFn>, 
  Query extends RouteCrud<RedirectFn>
  > {
  params: Params,
  query: Query,
  methods: RouterMethods<Redirect>
}