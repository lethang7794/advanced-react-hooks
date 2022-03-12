// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.tsx

import * as React from 'react'

type State = {
  count: number
}

function countReducer(prevState: State, newState: State) {
  return {count: newState.count}
}

function Counter({initialCount = 0, step = 5}) {
  const [state, setState] = React.useReducer(countReducer, {
    count: initialCount,
  })

  const increment = () => setState({count: state.count + step})
  const decrement = () => setState({count: state.count - step})

  return (
    <div className="counter">
      <button onClick={decrement}>⬅️</button>
      {state.count}
      <button onClick={increment}>➡️</button>
    </div>
  )
}

function App() {
  return <Counter />
}

export default App
