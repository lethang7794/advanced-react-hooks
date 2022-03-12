// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.tsx

import * as React from 'react'

function countReducer(count: number, step: number) {
  return count + step
}

function Counter({initialCount = 0, step = 5}) {
  const [count, changeCount] = React.useReducer(countReducer, initialCount)

  const increment = () => changeCount(step)
  const decrement = () => changeCount(-step)
  return (
    <div className="counter">
      <button onClick={decrement}>⬅️</button>
      {count}
      <button onClick={increment}>➡️</button>
    </div>
  )
}

function App() {
  return <Counter />
}

export default App
