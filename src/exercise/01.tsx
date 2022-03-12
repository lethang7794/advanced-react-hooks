// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.tsx

import * as React from 'react'

type State = {
  count: number
}
type Action = State | ((s: State) => State)

function countReducer(state: State, action: Action) {
  const newState = typeof action === 'function' ? action(state) : action
  return {...state, count: newState.count}
}

function Counter({initialCount = 0, step = 5}) {
  const [state, setState] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state

  const increment = () => setState(state => ({count: state.count + step}))
  const decrement = () => setState(state => ({count: state.count - step}))

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
