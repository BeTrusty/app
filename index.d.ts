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
