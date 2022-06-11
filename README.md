# create-context-hook

Creates a custom React hook and context provider pair to allow easier use of
context.

# Getting Started

## Installation

To install simply run the following command:

NPM:

```
npm i create-context-hook
```

Yarn:

```
yarn add create-context-hook
```

## Usage

```jsx
import { createContextHook } from 'create-context-hook'

const [useMyContext, MyProvider] = createContextHook('initial value')

const MyComponent = () => {
  const value = useMyContext()

  return <div>{`The context value is: ${value}`}</div>
}

const App = () => (
  <MyProvider value="a new value">
    <MyComponent />
  </MyProvider>
)
```

Output:

```html
<div>The context value is a new value</div>
```
