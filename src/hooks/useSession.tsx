import { useEffect, useContext } from 'react'
import { Context } from '@src/context'
import { Session } from '@src/types'

const useSession = (session: Session): void => {
  const { setMySession, setName, setEmail, setProfilePicture } =
    useContext(Context)
  useEffect(() => {
    setMySession(session)
    setName(session.user.name)
    setEmail(session.user.email)
    setProfilePicture(session.user.image)
  }, [])
}

export { useSession }
