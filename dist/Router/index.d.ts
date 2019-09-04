import { Get, Set, Remove, Redirect, Includes } from './types';
export interface Methods {
    getParam: Get;
    setParam: Set;
    removeParam: Remove;
    getQuery: Get;
    setQuery: Set;
    removeQuery: Remove;
    redirect: Redirect;
    routeIncludes: Includes;
}
export declare class Router {
    _methods: Methods;
    constructor(methods: Methods);
    getParam: (param: string) => string | undefined;
    setParam: (param: string, value: string) => void;
    removeParam: (param: string) => void;
    getQuery: (query: string) => string | undefined;
    setQuery: (query: string, value: string) => void;
    removeQuery: (query: string) => void;
    redirect: (route: string) => void;
    routeIncludes: (route: string) => boolean;
}
