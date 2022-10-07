import { GetServerSidePropsContext } from 'next'
import { getSession } from 'next-auth/react'
import { Session } from 'next-auth'
import React, { useEffect, useContext } from 'react'
import { Context } from '../context'
import { Header } from '@components/Header'
import { Profile } from '@components/Profile'
import { Button } from '@components/Button'

function Home ({ session }: object) {
  const { setMySession, setName, setEmail, setProfilePicture } = useContext(
    Context
  )
  useEffect(() => {
    setMySession(session)
    setName(session.user.name)
    setEmail(session.user.email)
    setProfilePicture(session.user.image)
  })
  return (
    <>
      <main className='flex min-h-screen flex-col justify-start p-8 bg-dark mx-auto text-center text-white'>
        <Header />
        <Profile />
        <h4 className='my-2'>Cuenta no verificada (no puedes mintear NFTs).</h4>
        <section className='flex flex-col gap-3 mt-7'>
          <Button
            content='Marketplace'
            onClick={() => console.log('marketplace')}
          />
          <Button
            content='Mintear NFT'
            onClick={() => console.log('mintear NFT')}
          />
          <Button
            content='Mi wallet'
            onClick={() => console.log('mi wallet')}
          />
          <Button
            content='Panel inquilino'
            onClick={() => console.log('Panel inquilino')}
          />
        </section>
      </main>
    </>
  )
}

export default Home

export async function getServerSideProps (context: GetServerSidePropsContext) {
  const session = await getSession(context)
  // redirect if not authenticated
  if (!session) {
    return {
      props: { session },
      redirect: {
        destination: '/signin',
        permanent: false
      }
    }
  }
  return {
    props: { session }
  }
}
