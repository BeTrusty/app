import React, { createContext, useState } from 'react'

const Context = createContext()

function Provider ({ children }: Children) {
  const [indexSlide, setIndexSlide] = useState<number>(0)
  const [viewButton, setViewButton] = useState<boolean>(true)
  return (
    <Context.Provider
      value={{ indexSlide, setIndexSlide, viewButton, setViewButton }}
    >
      {children}
    </Context.Provider>
  )
}

export { Provider, Context }
