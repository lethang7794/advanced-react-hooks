// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.tsx

import * as React from 'react'

type State = {
  count: number
}

function countReducer(state: State, action: State) {
  return {...state, count: action.count}
}

function Counter({initialCount = 0, step = 5}) {
  const [state, setState] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state

  const increment = () => setState({count: count + step})
  const decrement = () => setState({count: count - step})

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
