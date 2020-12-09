import { useEffect, useState } from 'react'

const useCounter = () => {
  const [count, setCount] = useState(0)
  const increase = () => setCount(count + 1)
  const decrease = () => {
    if (count > 0 ) {
      setCount(count - 1)
    } else {
      setCount(0)
    }
  }
  useEffect(() => {
    console.log(count)
  }, [count])

  return {
    count,
    increase,
    decrease,
  }
}

export default useCounter
