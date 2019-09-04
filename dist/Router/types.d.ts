export declare type Get = (name: string) => string | undefined;
export declare type Set = (name: string, value: string) => void;
export declare type Remove = (name: string) => void;
export declare type Redirect = (route: string) => void;
export declare type Includes = (route: string) => boolean;
