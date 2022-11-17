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
  const [valuePropertyType, setValuePropertyType] = useState<string>('')
  const [valueNumberOfEnviroments, setValueNumberOfEnviroments] = useState<
    number | string
  >('')
  const [valueOwnSurface, setValueOwnSurface] = useState<number | string>('')
  const [valueCommonSuface, setValueCommonSuface] = useState<number | string>(
    ''
  )
  const [valueOwner, setValueOwner] = useState<string>('')
  const [valueLocation, setValueLocation] = useState<string>('')
  const [valueDepto, setValueDepto] = useState<string>('')
  const [valueFlat, setValueFlat] = useState<number | string>('')
  const [valueCity, setValueCity] = useState<string>('')
  const [valueDestination, setValueDestination] = useState<string>('')
  const [valuePrice, setValuePrice] = useState<number | string>('')
  const [valueAnnualReturn, setValueAnnualReturn] = useState<number | string>(
    ''
  )
  const [valueAnnualVacancy, setValueAnnualVacancy] = useState<number | string>(
    ''
  )
  const [valueGravamen, setValueGravamen] = useState<string>('')
  const [valueAttachPhotos, setValueAttachPhotos] = useState<string>('')

  const [valueAttachPlans, setValueAttachPlans] = useState<string>('')
  const [valueAttachManual, setValueAttachManual] = useState<string>('')
  const [valueAttachDeeds, setValueAttachDeeds] = useState<string>('')
  const [valueAttachReports, setValueAttachReports] = useState<string>('')
  const [valueAttachImprovements, setValueAttachImprovements] = useState<
    string
  >('')
  const continueClickMintearNFT = (e: Event) => {
    e.preventDefault()
    setIndexPropertyData(indexPropertyData + 1)
    setIndexMintearNFT(indexMintearNFT + 1)
  }
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
        setIndexPropertyData,
        valuePropertyType,
        setValuePropertyType,
        valueNumberOfEnviroments,
        setValueNumberOfEnviroments,
        valueOwnSurface,
        setValueOwnSurface,
        valueCommonSuface,
        setValueCommonSuface,
        valueOwner,
        setValueOwner,
        valueLocation,
        setValueLocation,
        valueDepto,
        setValueDepto,
        valueFlat,
        setValueFlat,
        valueCity,
        setValueCity,
        valueDestination,
        setValueDestination,
        valuePrice,
        setValuePrice,
        valueAnnualReturn,
        setValueAnnualReturn,
        valueAnnualVacancy,
        setValueAnnualVacancy,
        valueGravamen,
        setValueGravamen,
        valueAttachPhotos,
        setValueAttachPhotos,
        valueAttachPlans,
        setValueAttachPlans,
        valueAttachManual,
        setValueAttachManual,
        valueAttachDeeds,
        setValueAttachDeeds,
        valueAttachReports,
        setValueAttachReports,
        valueAttachImprovements,
        setValueAttachImprovements,
        continueClickMintearNFT
      }}
    >
      {children}
    </Context.Provider>
  )
}

export { Provider, Context }
