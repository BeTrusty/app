type Children = {
    children: JSX.Element
}

type Button = {
    content: string
    onClick: MouseEvent<HTMLButtonElement>
}

type ButtonLogin = {
    content: string
    img: string
    onClick: MouseEvent<HTMLButtonElement>
}

type Features = {
    img: string
    text: string
}

type GOOGLE_PROVIDER = {
    clientId: string | undefined
    clientSecret: string | undefined
}
