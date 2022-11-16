import React, { createContext, useState } from 'react'

const Context = createContext({})

function Provider ({ children }: Children) {
  const [indexSlide, setIndexSlide] = useState<number>(0)
  const [indexMintearNFT, setIndexMintearNFT] = useState<number>(0)
  const [indexPropertyData, setIndexPropertyData] = useState<number>(1)
  const [viewButton, setViewButton] = useState<boolean>(true)
  const [mySession, setMySession] = useState<object>({})
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [profilePicture, setProfilePicture] = useState<string>('')
  return (
    <Context.Provider
      value={{
        indexSlide,
        setIndexSlide,
        viewButton,
        setViewButton,
        mySession,
        setMySession,
        name,
        setName,
        email,
        setEmail,
        profilePicture,
        setProfilePicture,
        indexMintearNFT,
        setIndexMintearNFT,
        indexPropertyData,
        setIndexPropertyData
      }}
    >
      {children}
    </Context.Provider>
  )
}

export { Provider, Context }
