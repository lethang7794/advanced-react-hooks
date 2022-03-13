// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.tsx

import * as React from 'react'

const CountContext = React.createContext(
  [] as unknown as readonly [
    number,
    React.Dispatch<React.SetStateAction<number>>,
  ],
)

const CountProvider = ({children}: {children: React.ReactNode}) => {
  const [count, setCount] = React.useState(0)
  const value = [count, setCount] as const
  return <CountContext.Provider value={value}>{children}</CountContext.Provider>
}

function CountDisplay() {
  const [count] = React.useContext(CountContext)
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const [, setCount] = React.useContext(CountContext)
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  )
}

export default App
