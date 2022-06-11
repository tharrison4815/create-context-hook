/// <reference types="react" />
export declare type CreateContextHookReturn<T> = [() => T, React.Provider<T>];
declare const createContextHook: <T>(defaultValue: T) => CreateContextHookReturn<T>;
export { createContextHook };
