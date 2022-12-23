import { useState, useEffect } from 'react'

function useLocalStorage<T> (
  key: string
): [T | undefined, (value: T | ((prevValue: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T | undefined>(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : undefined
    } catch (error) {
      console.log(error)
      return undefined
    }
  })

  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === key) {
        setStoredValue(JSON.parse(e.newValue!))
      }
    }

    window.addEventListener('storage', handleStorageChange)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [key])

  const setValue = (value: T | ((prevValue: T) => T)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue!) : value
      setStoredValue(valueToStore)
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.log(error)
    }
  }

  return [storedValue, setValue]
}

export { useLocalStorage }
