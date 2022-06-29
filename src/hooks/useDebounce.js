import { useEffect, useState } from "react"

const useDebounce = (value, timeout) => {

  // states
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {

    const myTimeout = setTimeout(() => {
      setDebouncedValue(value);
    }, 1000);

    // clear on dependency change
    return () => {
      clearTimeout(myTimeout);
    }

  }, [value, timeout])

  return { debouncedValue }
}

export default useDebounce