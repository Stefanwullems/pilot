
export type Get = (name: string) => string | undefined
export type Set = (name: string, value: string) => void
export type Remove = (name: string) => void

export type Redirect = (route: string) => void
export type Includes = (route: string) => boolean