import { createContext, useContext } from 'react'

export type CreateContextHookReturn<T> = [() => T, React.Provider<T>]

const createContextHook = <T>(defaultValue: T): CreateContextHookReturn<T> => {
  const context = createContext<T>(defaultValue)
  const useCreatedContext = () => useContext(context)

  return [useCreatedContext, context.Provider]
}

export { createContextHook }
