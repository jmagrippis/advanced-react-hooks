// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import {createContext, useContext, useState} from 'react'

const CountContext = createContext()

const CountProvider = ({children}) => {
  const value = useState(0)

  return <CountContext.Provider value={value}>{children}</CountContext.Provider>
}

const useCount = () => {
  const value = useContext(CountContext)

  if (!value) {
    throw new Error('useCount must be used within a CountProvider')
  }

  return value
}

function CountDisplay() {
  const [count] = useCount()

  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const [, setCount] = useCount()
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
