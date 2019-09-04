export type RedirectFn = (...args: any[]) => void

export type Get = (name: string) => string | undefined
export type Set<Redirect extends RedirectFn> = (name: string, value: string) => Parameters<Redirect> 
export type Remove<Redirect extends RedirectFn> = (name: string) => Parameters<Redirect> 

export type Includes = (route: string) => boolean