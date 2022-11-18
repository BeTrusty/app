type Session = {
    session: JSONObject
}

type Children = {
    children: JSX.Element
}

type Button = {
    content: string
    onClick: MouseEvent<HTMLButtonElement>
}

type ButtonDisabled = {
    content: string
    active: boolean
}

type ButtonLogin = {
    content: string
    img: string
    onClick: MouseEvent<HTMLButtonElement>
}

type ButtonWithIcon = {
    content: string
    children: JSX.Element
    onClick: MouseEvent<HTMLButtonElement>
}

type Features = {
    img: string
    text: string
}

type NavBar = {
    title: string
}

type GOOGLE_PROVIDER = {
    clientId: string | undefined
    clientSecret: string | undefined
}

interface ContextType {
    indexSlide: number
    setIndexSlide: (a: number) => void
    viewButton: boolean
    setViewButton: (a: boolean) => void
    mySession: object
    setMySession: (a: object) => void
    name: string
    setName: (a: string) => void
    email: string
    setEmail: (a: string) => void
    profilePicture: string
    setProfilePicture: (a: string) => void
    indexMintearNFT: number
    setIndexMintearNFT: (a: number) => void
    indexPropertyData: number
    setIndexPropertyData: (a: number) => void
    valuePropertyType: string
    setValuePropertyType: (a: string) => void
    valueNumberOfEnviroments: number | string
    setValueNumberOfEnviroments: (a: number | string) => void
    valueOwnSurface: number | string
    setValueOwnSurface: (a: number | string) => void
    valueCommonSuface: number | string
    setValueCommonSuface: (a: number | string) => void
    valueOwner: string
    setValueOwner: (a: string) => void
    valueLocation: string
    setValueLocation: (a: string) => void
    valueDepto: string
    setValueDepto: (a: string) => void
    valueFlat: number | string
    setValueFlat: (a: number | string) => void
    valueCity: string
    setValueCity: (a: string) => void
    valueDestination: string
    setValueDestination: (a: string) => void
    valuePrice: number | string
    setValuePrice: (a: number | string) => void
    valueAnnualReturn: number | string
    setValueAnnualReturn: (a: number | string) => void
    valueAnnualVacancy: number | string
    setValueAnnualVacancy: (a: number | string) => void
    valueGravamen: string
    setValueGravamen: (a: string) => void
    valueAttachPhotos: string
    setValueAttachPhotos: (a: string) => void
    valueAttachPlans: string
    setValueAttachPlans: (a: string) => void
    valueAttachManual: string
    setValueAttachManual: (a: string) => void
    valueAttachDeeds: string
    setValueAttachDeeds: (a: string) => void
    valueAttachReports: string
    setValueAttachReports: (a: string) => void
    valueAttachImprovements: string
    setValueAttachImprovements: (a: string) => void
    continueClickMintearNFT: (e: Event) => void
}
