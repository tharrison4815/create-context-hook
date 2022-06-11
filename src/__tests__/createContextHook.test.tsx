import { createContextHook } from '../createContextHook'
import { renderHook } from '@testing-library/react'

it('should create a hook and proider pair where the hook return the initial value', async () => {
  const [useMyContext, MyProvider] = createContextHook('initial value')

  const { result } = renderHook(useMyContext)

  expect(result.current).toBe('initial value')
})

it('should create a hook and proider pair where the hook return the value given to the provider', async () => {
  const [useMyContext, MyProvider] = createContextHook('initial value')

  const MyWrapper = ({ children }: { children: React.ReactNode }) => (
    <MyProvider value="new value">{children}</MyProvider>
  )
  const { result } = renderHook(useMyContext, { wrapper: MyWrapper })

  expect(result.current).toBe('new value')
})
