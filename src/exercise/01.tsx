// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.tsx

import * as React from 'react'

type State = {
  count: number
}
type Action = {
  type: 'increment' | 'decrement'
  step: number
}

function countReducer(state: State, action: Action) {
  const {type, step} = action

  switch (type) {
    case 'increment':
      return {
        ...state,
        count: state.count + step,
      }

    case 'decrement':
      return {
        ...state,
        count: state.count - step,
      }

    default:
      throw new Error(`Unknown action type: ${type}`)
  }
}

function Counter({initialCount = 0, step = 5}) {
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state

  const increment = () => dispatch({type: 'increment', step})
  const decrement = () => dispatch({type: 'decrement', step})

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
